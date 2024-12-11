import "./error.css";
// import Link from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <div className="container">
        <h1 className="heading">Halaman Tidak Ditemukan</h1>
        <p className="message">
          orry, the page {"your'e"} looking for {"doesn't"} exist.
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
