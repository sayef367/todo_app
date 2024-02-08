
export default function viewTask() {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className="card p-3">
          <span>this is first task</span>
          <div className="mt-2">
            <button className="btn btn-outline-success btn-sm m-2">
              Complete
            </button>
            <button className="btn btn-outline-danger btn-sm">
              Delete
            </button>
          </div>
        </div>
    </div>
  );
};
