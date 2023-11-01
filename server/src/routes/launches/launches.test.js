const app = require("../../app");

const request = require("supertest");

describe("Test GET Request /launches", () => {
  test("200 success response", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST Request /launches", () => {
  const completedLaunchData = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
    launchDate: "January 4, 2028",
  };

  const launchWithoutDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
  };

  const launchDataWithInvalidDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
    launchDate: "zoot",
  };

  test("201 Requested Response", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completedLaunchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(completedLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);
  });

  test("Catch Missing Properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Missing required launch property",
    });
  });

  test("Catch invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithInvalidDate)
      .expect("Content-Type", /json/)
      .expect(400);
    expect(response.body).toStrictEqual({
      error: "Invalid launch date",
    });
  });
});
