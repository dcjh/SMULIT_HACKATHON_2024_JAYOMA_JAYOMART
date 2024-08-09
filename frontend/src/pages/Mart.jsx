import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import NodeCard from "../components/home/nodeCard";

const Mart = () => {
    const [mart, setMart] = useState([]);
    const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/dataMart")
      .then((response) => {
        setMart(response.data.content);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
        {loading ? <Spinner /> : <NodeCard mart={mart} />}
    </div>
  )
}

export default Mart