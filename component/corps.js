import Script from 'next/script';
import React from 'react';
import { Line, Bar, Doughnut, PolarArea } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Chart, { registerables } from 'chart.js/auto';
import bgImage from '../public/1.jpg';

const data_line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Store 1',
      data: [45, 32, 92, 64, 16, 28, 128],
      fill: false,
      borderColor: 'blue',
      tension: 0.1,
    },
    {
      label: 'Store 2',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'green',
      tension: 0.1,
    },
    {
      label: 'Store 3',
      data: [78, 88, 69, 100, 76, 92, 108],
      fill: false,
      borderColor: 'red',
      tension: 0.1,
    },
  ],
};
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const data_bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Store 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'blue',
      borderColor: 'blue',
      borderWidth: 1,
    },
    {
      label: 'Store 2',
      data: [85, 82, 39, 84, 86, 68, 76],
      backgroundColor: 'yellow',
      borderColor: 'yellow',
      borderWidth: 1,
    },
    {
      label: 'Store 3',
      data: [33, 29, 79, 106, 132, 116, 148],
      backgroundColor: 'green',
      borderColor: 'green',
      borderWidth: 1,
    },
  ],
};

const data_doghnut = {
  labels: ['Store 1', 'Store 2', 'Store 3'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [213, 403, 108],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
    },
  ],
};

const data_polarea = {
  labels: ['Store 1', 'Store 2', 'Store 3'],
  datasets: [
    {
      label: "Chiffre d'affaire mensuel",
      data: [11, 16, 7],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)',
      ],
    },
  ],
};
function Corps() {
  return (
    <div id="corps_principal" data_spy="scroll" data_target="#content_data">
      <div id="contenu_principal">
        <span id="Dashboard"></span>
        <br />
        <br />
        <br />
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" style={{ fontSize: '17px', fontWeight: '500' }}>
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <div className="row">
          <div className="col-xs-6 col-sm-6 col-xs-4 col-lg-3 col-md-4 space_line_chart">
            <div
              className="card info-card sales-card"
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderStyle: 'none',
              }}
            >
              <div
                className="card-body"
                style={{
                  float: 'left',
                  backgroundColor: 'white',
                  borderRadius: '5px 0 0 5px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'right',
                }}
              >
                <h5 className="card-title">
                  Ventes{' '}
                  <span style={{ color: '#888', fontSize: '16px' }}>
                    | Ce jour
                  </span>
                </h5>
                <br />
                <div className="d-flex align-items-center">
                  <div
                    className="card-icon rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: 'rgb(246, 222, 254)',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'left',
                      width: '70px',
                      height: '70px',
                    }}
                  >
                    <i
                      className="bi bi-cart-check"
                      style={{
                        color: 'rgb(65, 84, 241)',
                        fontSize: '32px',
                        fontWeight: '400',
                      }}
                    ></i>
                  </div>
                  <div className="ps-3">
                    <span>
                      <h4>345</h4>
                    </span>
                    <span className="text-success small pt-1 fw-bold">12%</span>
                    <span className="text-muted small pt-2 ps-1">increase</span>
                  </div>
                </div>
                <br />
              </div>
              <div
                className="filter"
                style={{
                  float: 'right',
                  backgroundColor: 'transparent',
                  width: '30px',
                  textAlign: 'center',
                }}
              >
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Ce jour
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ce mois
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cette année
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-xs-4 col-lg-3 col-md-4 space_line_chart">
            <div
              className="card info-card sales-card"
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderStyle: 'none',
              }}
            >
              <div
                className="card-body"
                style={{
                  float: 'left',
                  backgroundColor: 'white',
                  borderRadius: '5px 0 0 5px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'right',
                }}
              >
                <h5 className="card-title">
                  CA{' '}
                  <span style={{ color: '#888', fontSize: '16px' }}>
                    | Aujourd'hui
                  </span>
                </h5>
                <br />
                <div className="d-flex align-items-center">
                  <div
                    className="card-icon rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: '#e0f8e9',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'left',
                      width: '70px',
                      height: '70px',
                    }}
                  >
                    <i
                      className="bi bi-currency-dollar"
                      style={{
                        color: '#2eca6a',
                        fontSize: '32px',
                        fontWeight: '400',
                      }}
                    ></i>
                  </div>
                  <div className="ps-3">
                    <span>
                      <h4>$ 26,548</h4>
                    </span>
                    <span className="text-success small pt-1 fw-bold">8%</span>
                    <span className="text-muted small pt-2 ps-1">increase</span>
                  </div>
                </div>
                <br />
              </div>
              <div
                className="filter"
                style={{
                  float: 'right',
                  backgroundColor: 'transparent',
                  width: '30px',
                  textAlign: 'center',
                }}
              >
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Ce jour
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ce mois
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cette année
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-xs-4 col-lg-3 col-md-4 space_line_chart">
            <div
              className="card info-card sales-card"
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderStyle: 'none',
              }}
            >
              <div
                className="card-body"
                style={{
                  float: 'left',
                  backgroundColor: 'white',
                  borderRadius: '5px 0 0 5px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'right',
                }}
              >
                <h5 className="card-title">
                  Clients{' '}
                  <span style={{ color: '#888', fontSize: '16px' }}>
                    | Ce mois
                  </span>
                </h5>
                <br />
                <div className="d-flex align-items-center">
                  <div
                    className="card-icon rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: '#ffecdf',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'left',
                      width: '70px',
                      height: '70px',
                    }}
                  >
                    <i
                      className="bi bi-people"
                      style={{
                        color: '#ff771d',
                        fontSize: '32px',
                        fontWeight: '400',
                      }}
                    ></i>
                  </div>
                  <div className="ps-3">
                    <span>
                      <h4>32</h4> <h6> nouveaux clients</h6>
                    </span>
                    <span className="text-success small pt-1 fw-bold">22%</span>
                    <span className="text-muted small pt-2 ps-1">de plus </span>
                  </div>
                </div>
                <br />
              </div>
              <div
                className="filter"
                style={{
                  float: 'right',
                  backgroundColor: 'transparent',
                  width: '30px',
                  textAlign: 'center',
                }}
              >
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-xs-4 col-lg-10 col-md-10 space_line_chart">
            <div
              className="card info-card sales-card"
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderStyle: 'none',
              }}
            >
              <div
                className="card-body"
                style={{
                  float: 'left',
                  backgroundColor: 'white',
                  borderRadius: '5px 0 0 5px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'right',
                }}
              >
                <h5 className="card-title">
                  <select
                    className="dataTable-selector"
                    style={{ borderRadius: '9px', height: '28px' }}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                  </select>{' '}
                  {'       '}
                  Top articles les plus vendus{' '}
                  <span style={{ color: '#888', fontSize: '16px' }}>
                    | Ce mois
                  </span>
                </h5>
                <div className="d-flex align-items-center">
                  <table className="table datatable table-striped table-light">
                    <thead
                      style={{
                        backgroundColor: 'rgb(246, 249, 255)',
                        lineHeight: '30px',
                      }}
                    >
                      <tr>
                        <th>Référence</th>
                        <th>Désignation</th>
                        <th>Type</th>
                        <th> Prix de vente</th>
                        <th>Quantité vendue</th>
                        <th>Chiffre d'affaire</th>
                        <th>Nb de client</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ textAlign: 'center' }}>
                        <td> ART001</td>
                        <td>Désignation 1</td>
                        <td> Plat </td>
                        <td> 8.2.2$</td>
                        <td>1018</td>
                        <td>8347,6</td>
                        <td>218</td>
                      </tr>
                      <tr style={{ textAlign: 'center' }}>
                        <td> ART001</td>
                        <td>Désignation 1</td>
                        <td> Plat </td>
                        <td> 8.2.2$</td>
                        <td>1018</td>
                        <td>8347,6</td>
                        <td>218</td>
                      </tr>
                      <tr style={{ textAlign: 'center' }}>
                        <td> ART001</td>
                        <td>Désignation 1</td>
                        <td> Plat </td>
                        <td> 8.2.2$</td>
                        <td>1018</td>
                        <td>8347,6</td>
                        <td>218</td>
                      </tr>
                      <tr style={{ textAlign: 'center' }}>
                        <td> ART001</td>
                        <td>Désignation 1</td>
                        <td> Plat </td>
                        <td> 8.2.2$</td>
                        <td>1018</td>
                        <td>8347,6</td>
                        <td>218</td>
                      </tr>
                      <tr style={{ textAlign: 'center' }}>
                        <td> ART001</td>
                        <td>Désignation 1</td>
                        <td> Plat </td>
                        <td> 8.2.2$</td>
                        <td>1018</td>
                        <td>8347,6</td>
                        <td>218</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <span id="Etablissement"></span>
        <br />
        <br />
        <br />
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" style={{ fontSize: '17px', fontWeight: '500' }}>
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Etablissement</li>
            </ol>
          </nav>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <span id="Reporting"></span>
        <br />
        <br />
        <br />
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" style={{ fontSize: '17px', fontWeight: '500' }}>
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Reporting</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-sm-10 col-xs-10 col-lg-5 col-md-5 space_line_chart">
            <div>
              <br />
              <h5 style={{ textAlign: 'center' }}>Evolution du CA 2022</h5>
              <Line data={data_line} option={options} />
              <br />
            </div>
          </div>
          <div className="col-sm-10 col-xs-10 col-lg-5 col-md-5 space_line_chart">
            <div>
              <br />
              <h5 style={{ textAlign: 'center' }}>Evolution du CA 2021</h5>
              <Bar data={data_bar} option={options} />
            </div>
          </div>
          <div className="col-sm-10 col-xs-10 col-lg-5 col-md-5 space_line_chart">
            <div>
              <br />
              <h5 style={{ textAlign: 'center' }}>Répartition des clients</h5>
              <Doughnut data={data_doghnut} option={options} />
            </div>
            <br />
            <h6 style={{ textAlign: 'center' }}>
              Nombre de client de chaque store
            </h6>
            <br />
          </div>

          <div className="col-sm-10 col-xs-10 col-lg-5 col-md-5 space_line_chart">
            <div>
              <br />
              <h5 style={{ textAlign: 'center' }}>Régions couverte</h5>
              <PolarArea data={data_polarea} option={options} />
            </div>
            <br />
            <h6 style={{ textAlign: 'center' }}>
              Nombre de région couvert par chaque store
            </h6>
            <br />
          </div>
        </div>

        <span id="Commandes"></span>
        <br />
        <br />
        <br />
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" style={{ fontSize: '17px', fontWeight: '500' }}>
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Commandes</li>
            </ol>
          </nav>
        </div>
        <nav>
          <div className="nav nav-tabs" id="nav-tab-commande" role="tablist">
            <button
              className="nav-link active"
              id="nav-en_cours-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-en_cours"
              type="button"
              role="tab"
              aria-controls="nav-en_cours"
              aria-selected="true"
            >
              En cours
            </button>
            <button
              className="nav-link"
              id="nav-acceptee-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-acceptee"
              type="button"
              role="tab"
              aria-controls="nav-acceptee"
              aria-selected="false"
            >
              Acceptées
            </button>
            <button
              className="nav-link"
              id="nav-en_livraison-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-en_livraison"
              type="button"
              role="tab"
              aria-controls="nav-en_livraison"
              aria-selected="false"
            >
              En attente livraison
            </button>
            <button
              className="nav-link"
              id="nav-a_recuperer-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-a_recuperer"
              type="button"
              role="tab"
              aria-controls="nav-a_recuperer"
              aria-selected="false"
            >
              A recuperer
            </button>
            <button
              className="nav-link"
              id="nav-refusee-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-refusee"
              type="button"
              role="tab"
              aria-controls="nav-refusee"
              aria-selected="false"
            >
              Refusées
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-en_cours"
            role="tabpanel"
            aria-labelledby="nav-en_cours-tab"
          >
            <div className="row">
              <div
                className="col-sm-12 col-xs-12 col-lg-11 col-md-12"
                id="commande_liste"
              >
                <table className="table datatable table-striped table-light">
                  <thead
                    style={{
                      lineHeight: '30px',
                      fontSize: '14px',
                      width: 'auto',
                      textAlign: 'center',
                    }}
                  >
                    <tr>
                      <th></th>
                      <th>Order ID</th>
                      <th>Point de vente</th>
                      <th>Client</th>
                      <th>Heure</th>
                      <th>Option</th>
                      <th>Livraison souhaitée</th>
                      <th>Adresse</th>
                      <th>Total TTC</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      lineHeight: '40px',
                      textAlign: 'center',
                    }}
                  >
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#Modal_en_cours"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 1</td>
                      <td>Store1</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#Modal_en_cours"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 2</td>
                      <td>Store2</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#Modal_en_cours"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 3</td>
                      <td>Store2</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#Modal_en_cours"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 4</td>
                      <td>Store1</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div
              className="modal fade"
              id="Modal_en_cours"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Détails de la commande
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <table style={{ width: '98vh' }}>
                      <tr>
                        <td>Commande N° </td>
                        <td> 103</td>
                        <td style={{ fontWeight: 'bold', textAlign: 'left' }}>
                          Motif de refus
                        </td>
                      </tr>
                      <tr>
                        <td>Type de vente </td>
                        <td> Livraison</td>
                        <td rowSpan={5}>
                          {' '}
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="5"
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td>Point de vente </td>
                        <td> Store1</td>
                      </tr>
                      <tr>
                        <td>A livrer à </td>
                        <td> 02:00 pm</td>
                      </tr>
                      <tr>
                        <td>Adresse</td>
                        <td>IV Ter Paris, VI</td>
                      </tr>
                      <tr>
                        <td>Client</td>
                        <td> exampleorder@gmail.com</td>
                      </tr>

                      <tr style={{ textAlign: 'left' }}>
                        <td colSpan={2}>
                          <h5>Listes des articles</h5>
                          <hr />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3}>
                          <table style={{ border: '2' }} className="table">
                            <thead>
                              <th>Référence</th>
                              <th>Désignation</th>
                              <th style={{ textAlign: 'center' }}>Quantité</th>
                              <th style={{ textAlign: 'center' }}>Prix</th>
                              <th style={{ textAlign: 'center' }}>Total ttc</th>
                            </thead>
                            <tbody className="table table-striped bordered">
                              <tr>
                                <td>ART001</td>
                                <td>Hamburger</td>
                                <td style={{ textAlign: 'center' }}>1</td>
                                <td style={{ textAlign: 'center' }}>2,6</td>
                                <td style={{ textAlign: 'center' }}>2,6</td>
                              </tr>
                              <tr>
                                <td>ART002</td>
                                <td>Nebab Kebab</td>
                                <td style={{ textAlign: 'center' }}>1</td>
                                <td style={{ textAlign: 'center' }}>2,99</td>
                                <td style={{ textAlign: 'center' }}>2,99</td>
                              </tr>
                              <tr>
                                <td>ART003</td>
                                <td>Mojito</td>
                                <td style={{ textAlign: 'center' }}>1</td>
                                <td style={{ textAlign: 'center' }}>1,32</td>
                                <td style={{ textAlign: 'center' }}>1,32</td>
                              </tr>
                              <tr>
                                <td>ART004</td>
                                <td>Nebab Kebab</td>
                                <td style={{ textAlign: 'center' }}>1</td>
                                <td style={{ textAlign: 'center' }}>2.05</td>
                                <td style={{ textAlign: 'center' }}>2,05</td>
                              </tr>
                              <tr>
                                <td>LIV0001</td>
                                <td>Zone 3</td>
                                <td style={{ textAlign: 'center' }}></td>
                                <td style={{ textAlign: 'center' }}></td>
                                <td style={{ textAlign: 'center' }}>5</td>
                              </tr>
                              <tr>
                                <td style={{ borderStyle: 'none' }}></td>
                                <td style={{ borderStyle: 'none' }}></td>
                                <td style={{ borderStyle: 'none' }}></td>
                                <td
                                  style={{
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    borderStyle: 'none',
                                  }}
                                >
                                  Total TTC ($)
                                </td>
                                <td
                                  style={{
                                    textAlign: 'center',
                                    borderStyle: 'none',
                                  }}
                                >
                                  <b>13,96</b>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger disabled"
                      data-bs-dismiss="modal"
                    >
                      Refuser
                    </button>
                    <button type="button" className="btn btn-success">
                      Accepter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-acceptee"
            role="tabpanel"
            aria-labelledby="nav-acceptee-tab"
          >
            <div className="row">
              <div className="col-sm-12 col-xs-12 col-lg-11 col-md-12">
                <table className="table datatable table-striped table-light">
                  <thead
                    style={{
                      lineHeight: '30px',
                      fontSize: '14px',
                      width: 'auto',
                      textAlign: 'center',
                    }}
                  >
                    <tr>
                      <th></th>
                      <th>N° de commande</th>
                      <th>Point de vente</th>
                      <th>Client</th>
                      <th>Heure</th>
                      <th>Option</th>
                      <th>Livraison souhaitée</th>
                      <th>Adresse</th>
                      <th>Total TTC</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      lineHeight: '40px',
                      textAlign: 'center',
                    }}
                  >
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-success"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 1</td>
                      <td>Store1</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-success"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 2</td>
                      <td>Store2</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-success"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 3</td>
                      <td>Store2</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-success"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 4</td>
                      <td>Store1</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-en_livraison"
            role="tabpanel"
            aria-labelledby="nav-en_livraison-tab"
          >
            <div className="row">
              <div className="col-sm-12 col-xs-12 col-lg-11 col-md-12">
                <table className="table datatable table-striped table-light">
                  <thead
                    style={{
                      lineHeight: '30px',
                      fontSize: '14px',
                      width: 'auto',
                      textAlign: 'center',
                    }}
                  >
                    <tr>
                      <th></th>
                      <th>N° de commande</th>
                      <th>Point de vente</th>
                      <th>Client</th>
                      <th>Heure</th>
                      <th>Option</th>
                      <th>Livraison souhaitée</th>
                      <th>Adresse</th>
                      <th>Total TTC</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      lineHeight: '40px',
                      textAlign: 'center',
                    }}
                  >
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-primary"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 1</td>
                      <td>Store1</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-primary"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 2</td>
                      <td>Store2</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-primary"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 3</td>
                      <td>Store2</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-primary"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 4</td>
                      <td>Store1</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-a_recuperer"
            role="tabpanel"
            aria-labelledby="nav-a_recuperer-tab"
          >
            <div className="row">
              <div className="col-sm-12 col-xs-12 col-lg-11 col-md-12">
                <table className="table datatable table-striped table-light">
                  <thead
                    style={{
                      lineHeight: '30px',
                      fontSize: '14px',
                      width: 'auto',
                      textAlign: 'center',
                    }}
                  >
                    <tr>
                      <th></th>
                      <th>N° de commande</th>
                      <th>Point de vente</th>
                      <th>Client</th>
                      <th>Heure</th>
                      <th>Option</th>
                      <th>Livraison souhaitée</th>
                      <th>Adresse</th>
                      <th>Total TTC</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      lineHeight: '40px',
                      textAlign: 'center',
                    }}
                  >
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-info"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 1</td>
                      <td>Store1</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-info"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 2</td>
                      <td>Store2</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-info"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 3</td>
                      <td>Store2</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-info"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 4</td>
                      <td>Store1</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-refusee"
            role="tabpanel"
            aria-labelledby="nav-refusee-tab"
          >
            <div className="row">
              <div className="col-sm-12 col-xs-12 col-lg-11 col-md-12">
                <table className="table datatable table-striped table-light">
                  <thead
                    style={{
                      lineHeight: '30px',
                      fontSize: '14px',
                      width: 'auto',
                      textAlign: 'center',
                    }}
                  >
                    <tr>
                      <th></th>
                      <th>N° de commande</th>
                      <th>Point de vente</th>
                      <th>Client</th>
                      <th>Heure</th>
                      <th>Option</th>
                      <th>Livraison souhaitée</th>
                      <th>Adresse</th>
                      <th>Total TTC</th>
                    </tr>
                  </thead>
                  <tbody
                    style={{
                      lineHeight: '40px',
                      textAlign: 'center',
                    }}
                  >
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-danger"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 1</td>
                      <td>Store1</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-danger"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 2</td>
                      <td>Store2</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-danger"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 3</td>
                      <td>Store2</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          type="button"
                          style={{ height: '40px' }}
                          className="btn btn-danger"
                        >
                          Détails
                        </button>
                      </td>
                      <td> 4</td>
                      <td>Store1</td>
                      <td> exampleorder@gmail.com </td>
                      <td>10:48 am</td>
                      <td> A livrer </td>
                      <td>14:00 am</td>
                      <td>IV Ter Paris, VI</td>
                      <td>64$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <span id="Shop"></span>
        <br />
        <br />
        <br />
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" style={{ fontSize: '17px', fontWeight: '500' }}>
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Shop</li>
            </ol>
          </nav>
        </div>

        <nav>
          <div className="nav nav-tabs" id="nav-tab-shop" role="tablist">
            <button
              className="nav-link active"
              id="nav-categorie-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-categorie"
              type="button"
              role="tab"
              aria-controls="nav-categorie"
              aria-selected="true"
            >
              Catégories
            </button>
            <button
              className="nav-link"
              id="nav-plat-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-plat"
              type="button"
              role="tab"
              aria-controls="nav-plat"
              aria-selected="false"
            >
              Plat
            </button>
            <button
              className="nav-link"
              id="nav-menu-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-menu"
              type="button"
              role="tab"
              aria-controls="nav-menu"
              aria-selected="false"
            >
              Menu
            </button>
            <button
              className="nav-link"
              id="nav-tva-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-tva"
              type="button"
              role="tab"
              aria-controls="nav-tva"
              aria-selected="false"
            >
              TVA
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-categorie"
            role="tabpanel"
            aria-labelledby="nav-categorie-tab"
          >
            Categories
          </div>
          <div
            className="tab-pane fade"
            id="nav-plat"
            role="tabpanel"
            aria-labelledby="nav-plat-tab"
          >
            Plat
          </div>
          <div
            className="tab-pane fade"
            id="nav-menu"
            role="tabpanel"
            aria-labelledby="nav-menu-tab"
          >
            Menu
          </div>
          <div
            className="tab-pane fade"
            id="nav-tva"
            role="tabpanel"
            aria-labelledby="nav-tva-tab"
          >
            TVA
          </div>
        </div>

        <span id="Paiement"></span>
        <br />
        <br />
        <br />
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" style={{ fontSize: '17px', fontWeight: '500' }}>
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Paiement</li>
            </ol>
          </nav>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <span id="Paramètres"></span>
        <br />
        <br />
        <br />
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" style={{ fontSize: '17px', fontWeight: '500' }}>
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active">Paramètres</li>
            </ol>
          </nav>
        </div>
        <nav>
          <div className="nav nav-tabs" id="nav-tab-utilisateur" role="tablist">
            <button
              className="nav-link active"
              id="gestion_utilisateur-tab"
              data-bs-toggle="tab"
              data-bs-target="#gestion_utilisateur"
              type="button"
              role="tab"
              aria-controls="nav-gestion_utilisateur"
              aria-selected="true"
            >
              Gestion des utilisateurs
            </button>
            <button
              className="nav-link"
              id="nav-gestion_store-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-gestion_store"
              type="button"
              role="tab"
              aria-controls="nav-gestion_store"
              aria-selected="false"
            >
              Gestion des stores
            </button>
            <button
              className="nav-link"
              id="nav-gestion_user-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-gestion_user"
              type="button"
              role="tab"
              aria-controls="nav-gestion_user"
              aria-selected="false"
            >
              Gestion des accès des utilisateurs
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="gestion_utilisateur"
            role="tabpanel"
            aria-labelledby="gestion_utilisateur-tab"
          >
            Gestion des utilisateurs
          </div>
          <div
            className="tab-pane fade"
            id="nav-gestion_store"
            role="tabpanel"
            aria-labelledby="nav-gestion_store-tab"
          >
            Gestion des stores
          </div>
          <div
            className="tab-pane fade"
            id="nav-gestion_user"
            role="tabpanel"
            aria-labelledby="nav-gestion_user-tab"
          >
            Gestion des accès
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Corps;
