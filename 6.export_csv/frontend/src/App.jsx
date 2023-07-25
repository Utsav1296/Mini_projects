import "./App.css";
// import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CSVLink } from "react-csv";
import TableData from "./components/TableData";

const headers = [
  { label: "Name", key: "username" },
  { label: "Age", key: "age" },
  { label: "Gender", key: "gender" },
];

const App = () => {
  const [data, setData] = useState([]);
  const [downloadedData, setDownloadedData] = useState([]);
  const csvDownloadRef = useRef(0);

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchDataToDownload = () => {
    fetch("http://localhost:8080/api/users")
      .then(res => res.json())
      .then(data => {
        setDownloadedData(data);
        setTimeout(() => {
          csvDownloadRef.current.link.click();
        }, 500);
      })
      .catch((error) => console.log("Error occurred", error));
  };

  const fetchData = () => {
    fetch("http://localhost:8080/api/users")
      .then(res => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log("Error occurred", error));
  };

  return (
    <div style={{ padding: "20px", width: "80vw" }}>
      <h1>Demo for exporting file to csv</h1>
      <div>
        <CSVLink data={data} headers={headers} filename="parents.csv">
          <button className="btn btn-primary mb-2">Export</button>
        </CSVLink>
        <CSVLink
          headers={headers}
          data={downloadedData}
          filename="parents.csv"
          className="hidden"
          ref={csvDownloadRef}
          target="_blank"
        />
        <button
          className="btn btn-primary mb-2"
          onClick={fetchDataToDownload}
          style={{ marginLeft: "5px" }}
        >
          Export Async
        </button>
      </div>
      <TableData data={data} fetchData={fetchData} />

    </div>
  );
};
export default App
