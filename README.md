## Design Pattern: Repository Pattern with Service Layer

This project implements the **Repository Pattern** along with a **Service Layer** to structure the application. This pattern is widely used in **Domain-Driven Design (DDD)** and follows the **Separation of Concerns** principle.

### Key Components:
- **Repository Layer**:  
  This layer abstracts the data access logic. Each entity like `Tugas` or `Mahasiswa` has its own repository that interacts with the database.  
  Example: `TugasRepository` and `MahasiswaRepository`.

- **Service Layer**:  
  Contains the business logic of the application. It communicates with the repository layer to fetch and save data, implementing additional operations before interacting with the repository.  
  Example: `TugasService` and `MahasiswaService`.

- **Controller Layer**:  
  Handles HTTP requests and communicates with the Service Layer. This layer is responsible for routing and is protected by authentication guards.  
  Example: `TugasController` and `MahasiswaController`.