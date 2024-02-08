import InputTask from "@/components/inputTask";
import ViewTask from "@/components/viewTask";

export default function Home() {
  return (
    <main className="container text-center">
      <h1 className="fw-bold mt-4 mb-4">Wellcome to Todo App</h1>
        <InputTask />
      <div className="row">
        <h2 className="fw-bold mt-4 mb-4">All Tasks List</h2>
        <h4 className="col-lg-6 col-sm-12 text-end mb-4">Total Tasks: 4</h4>
        <h4 className="col-lg-6 col-sm-12 text-start mb-4">Completed Tasks: 2</h4>
        <ViewTask />
      </div>
    </main>
  );
};
