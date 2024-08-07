import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../shared/_components/MainLayout";
import { RouteConstants } from "../../shared/constants/RouteConstants";
import axios from "axios";
import { Endpoints } from "../../shared/constants/Endpoints";
import { toast, ToastContainer } from "react-toastify";

export default function ClassesCreate() {
  let pageTitle = "Create Class";
  const [name, setName] = useState("");
  const nav = useNavigate();

  const createCategory = () => {
    if (name) {
      axios.post(Endpoints.CATEGORIES,{
        productCategoryImage: "",
        parentProductCategoryId: "",
        productCategoryName: name,
      })
        .then(() => {
          nav(RouteConstants.CLASSES_LIST);
          setTimeout(()=> {
            toast.success("Added Successfully!");
          },500)
        }).catch(() => {
          toast.error("Something went wrong!");
        });
    } else {
      toast.error("Please fill and submit");
    }
  };

  return (
    <>
      <MainLayout>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>{pageTitle}</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to={RouteConstants.CLASSES_CREATE}>Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Class Create</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">General</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                        title="Collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="inputName">Category Name</label>
                      <input
                        type="text"
                        id="inputName"
                        className="form-control"
                        placeholder="Enter Category Name"
                        onChange={($event) => {
                          setName($event.target.value);
                        }}
                        value={name}
                      />
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Link to={RouteConstants.CLASSES_LIST} className="btn btn-secondary">
                  Cancel
                </Link>
                <input
                  type="submit"
                  value="Create new Class"
                  className="btn btn-success float-right"
                  onClick={createCategory}
                />
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
      <ToastContainer theme="colored" />
    </>
  );
}
