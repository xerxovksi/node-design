import * as express from "express";

import { Employee } from "./models/Employee";
import { EmployeeRepository } from "./repository/employeeRepository";
import { IRepository } from "./repository/IRepository";
import { ApiResponse } from "./models/ApiResponse";

const hostname = "localhost";
const port = 3002;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const repository: IRepository<Employee> = new EmployeeRepository();

app.get(
  "/employees",
  function (_: express.Request, response: express.Response) {
    try {
      response
        .status(200)
        .json(new ApiResponse(repository.getAll(), null, 200));
    } catch (error) {
      response
        .status(500)
        .json(
          new ApiResponse(
            null,
            "Something went wrong while processing the request.",
            500
          )
        );
    }
  }
);

app.post(
  "/employees",
  function (request: express.Request, response: express.Response) {
    try {
      const employee = request.body as Employee;
      if (
        !employee ||
        !employee.id ||
        employee.id === "" ||
        !employee.name ||
        employee.name === ""
      ) {
        response
          .status(400)
          .json(new ApiResponse(null, "Invalid request.", 400));
      }

      response
        .status(200)
        .json(new ApiResponse([repository.create(employee)], null, 200));
    } catch (error) {
      response
        .status(500)
        .json(
          new ApiResponse(
            null,
            "Something went wrong while processing the request.",
            500
          )
        );
    }
  }
);

app.listen(port, () =>
  console.log(`Server listening on http://${hostname}:${port}/`)
);
