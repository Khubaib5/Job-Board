"use client";

import Input from "../ui/Input";
import Button from "../ui/Button";
import useJobStore  from "../../store/useJobStore";
import { useState, useEffect } from "react";

const initialState = {
  title: "",
  location: "",
  author: "",
};

const SearchForm = ({ jobs }) => {
  const [state, setstate] = useState(initialState);
  const [value, setValue] = useState("");
  const { setFilteredJobs } = useJobStore();

  useEffect(() => {
    function filterAndSetJobs() {
      const filteredJobs = jobs.filter((item) => {
        const titleCondition =
          state.title === "" ||
          item.name.toLowerCase().includes(state.title.toLowerCase());
        const locationCondition =
          state.location === "" ||
          item.location.toLowerCase().includes(state.location.toLowerCase());
        const companyCondition =
          state.author === "" ||
          item.author.toLowerCase().includes(state.author.toLowerCase());
        return titleCondition && locationCondition && companyCondition;
      });

      setFilteredJobs(filteredJobs);
    }

    filterAndSetJobs();
  }, [jobs, state, setFilteredJobs]);

  function onChange(event) {
    setstate({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();
  }
  return <>
    <div className="bg-gray-50/50 shadow rounded-md p-5 w-full">
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 lg:col-span-3">
              <Input
                id="title"
                type="text"
                noLabel
                placeHolder="Job Title"
                onChange={onChange}
              />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <Input
                id="location"
                type="text"
                noLabel
                placeHolder="Location"
                onChange={onChange}
              />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <Input
                id="author"
                type="text"
                noLabel
                placeHolder="Campany"
                onChange={onChange}
              />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <Button type="submit" fullWidth>
                Search Jobs
              </Button>
            </div>
          </div>
        </form>
      </div>
  </>;
};

export default SearchForm;
