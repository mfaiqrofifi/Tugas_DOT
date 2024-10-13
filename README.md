Design Pattern: Repository Pattern with Service Layer
This project implements the Repository Pattern along with a Service Layer to structure the application. This pattern is widely used in Domain-Driven Design (DDD) and follows the Separation of Concerns principle. The core idea is to isolate the domain logic (business logic) from data access logic by separating them into distinct layers.

Key Components:
Repository Layer:
The Repository layer abstracts the data access logic. It communicates with the database, typically using TypeORM in this project, and provides a clean interface for retrieving and storing data. Each entity, like Tugas or Mahasiswa, has its own repository.

Example: TugasRepository and MahasiswaRepository.
Service Layer:
The Service Layer contains the business logic of the application. It communicates with the repository layer to fetch and save data, and it implements any business rules or additional operations needed before interacting with the repository. This layer handles tasks like authentication, validation, and managing relations between entities.

Example: TugasService and MahasiswaService.
Controller Layer:
The Controller layer handles HTTP requests and responses. It communicates with the Service Layer to process requests from the client (e.g., creating, updating, or retrieving entities). This layer also handles routing and is protected by authentication guards (JWT) for secure access to certain routes.

Example: TugasController and MahasiswaController.