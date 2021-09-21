import React, { useEffect, useState } from "react";
import axios from "axios";

const apiURL = process.env.REACT_APP_API;

export function useCompany({ search, tags }) {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCompany() {
        const params = new URLSearchParams()
        if (search) {
            params.append('search', search)
        }
        if (tags) {
            params.append('tags', tags)
        }

      const url = encodeURI(`${apiURL}/company?${params.toString()}`);
      try {
        setIsLoading(true);
        const result = await axios.get(url);

        setCompanies(result.data);
        setError("");
      } catch (error) {
        setCompanies([]);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCompany();
  }, [search, tags]);

  return {
    data: companies,
    error,
    isLoading,
  };
}
