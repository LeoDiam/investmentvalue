<?php include('include/header.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Favicons -->
    <link href="img/TechIns.png" rel="icon">
    <link href="img/TechIns.png" rel="apple-touch-icon">
    <title>Υπολογισμός Σύνταξης</title>

    <script type="text/javascript" src="js_ergaleia/jquery-3.6.0.min.js"></script>
    <script defer src="js_ergaleia/pension-allMarkets.js"></script>
    <link rel="stylesheet" href="css_allinone/styles.css">
    <link rel="stylesheet" href="css_allinone/bootstrap.css">
    <link rel="stylesheet" href="css_ergaleia/platform.css">
</head>
<body>
<nav class="navbar bg-light" style="min-height: 50px;padding: 0px;background-color: grey!important;">
    <a href="#">
        <img src="img/TechIns.png" alt="Logo" style="width:40px;">
    </a>
    <button style="background-color: whitesmoke;border-radius: 10px" id="investProfile" class="navbar-brand">
        <a style="text-decoration: none;color: black" href="ependytiko">
            -Επενδυτικό Προφίλ-
        </a>
    </button>
    <button style="background-color: whitesmoke;border-radius: 10px" id="invest" class="navbar-brand">
        <!--            Path changed from ../../investment-->
        <a style="text-decoration: none;color: black" href="investment">
            -Επένδυση Κεφαλαίου-
        </a>
    </button>
    <button style="background-color: whitesmoke;border-radius: 10px" id="inflation" class="navbar-brand">
        <!--            Path changed from ../../inflation-->
        <a style="text-decoration: none;color: black" href="inflation">
            -Υπολογισμός Πληθωρισμού-
        </a>
    </button>
</nav>
<div>
</div>
<div class="wrapper">
    <div class="title">
        Υπολογισμος Αποταμιευσης
    </div>
    <div class="form">
        <div class="inputfield">
            <label>Ηλικία</label>
            <input type="text" id="age" class="input">
        </div>
        <div class="inputfield">
            <label>Μέσος Όρος Μηνιαίου Εισοδήματος</label>
            <input type="text" id="averageIncome" class="input">
        </div>
        <div class="inputfield">
            <label>Χρόνια Εργασίας μέχρι σήμερα</label>
            <input type="text" id="workyearsuntilnow" class="input">
        </div>
        <div class="inputfield">
            <label>Χρόνια Εργασίας εώς την σύνταξη</label>
            <input type="text" id="workyearsuntilpension" class="input">
        </div>
        <div class="inputfield">
            <label>Συντελεστής Αναπλήρωσης</label>
            <input type="text" id="syntelanapl" class="input">
        </div>
        <div class="inputfield">
            <label>Ανταποδοτική Σύνταξη</label>
            <input type="text" id="initpension" class="input">
        </div>
        <div class="inputfield">
            <label>Εθνική Σύνταξη</label>
            <input type="text" id="nationalpension" class="input">
        </div>
        <div class="inputfield">
            <label>Συνολική Μηνιαία Σύνταξη (Καθαρά)
            </label>
            <input type="text" id="totalpension" class="input">
        </div>
        <div class="inputfield">
            <label>Επιθυμητό σύνολο Κρατικής και Ιδιωτικής Σύνταξης</label>
            <input type="text" id="wantedpension" class="input">
        </div>
        <div class="inputfield">
            <label>Απαιτούμενη Ιδιωτική Σύνταξη</label>
            <input type="text" id="neededprivatepension" class="input">
        </div>
        <div class="inputfield">
            <label>Απαιτούμενο Κεφάλαιο (για σύνταξη ως τα 85)</label>
            <input type="text" id="neededcapitaluntil85" class="input">
        </div>
        <div class="inputfield">
            <label> Απαιτούμενο Αρχικό Ποσό Μηνιαίας Αποταμίευσης</label>
            <input type="text" id="neededinitialmonthlyinvestment" class="input">
        </div>
        <div class="inputfield">
            <label> Αρχικό Ποσό Μηνιαίας Αποταμίευσης</label>
            <input type="text" id="initialmonthlyinvestment" class="input">
        </div>
        <div class="inputfield">
            <label> Αρχικό Ποσό Εφάπαξ Καταβολής</label>
            <input type="text" id="initialcapital" class="input">
        </div>
        <div class="inputfield">
            <label> Ενδεικτική Ετήσια Απόδοση</label>
            <input type="text" id="anualperformance" class="input">
        </div>
        <div class="inputfield">
            <label> Ετήσια Αναπροσαρμογή (%) </label>
            <input type="text" id="anualadjustment" class="input">
        </div>
        <div class="inputfield">
            <label> Ενδεικτική Αξία στη Λήξη </label>
            <input type="text" id="endingvalue" class="input">
        </div>
        <div class="inputfield">
            <label> Ενδεικτική Μηνιαία Σύνταξη στη Λήξη </label>
            <input type="text" id="endingvaluepermonth" class="input">
        </div>
    </div>
</div>

<div id="xrimatistirio" class="display_none">
    <div class="container">
        <div class="row">
            <div style="padding: 15px;text-align: right" class="col-6">
                <h5 class="text-black-50 me-2">Αρχικό Ποσό Ετήσιας Επένδυσης: </h5>
            </div>
            <div style="padding: 15px" class="col-6">
                <input id="amount" class="form-control;" type="number" min="50" step="50"
                       onfocus=" let value = this.value; this.value = null; this.value=value">
            </div>
            <div style="padding: 15px;text-align: right" class="col-6">
                <h5 class="text-black-50 me-2">Αναπροσαρμογή: </h5>
            </div>
            <div style="padding: 15px" class="col-6">
                <input id="anaprosarmogi" class="form-control;" type="number" min="0" max="6" step="3"
                       onfocus=" let value = this.value; this.value = null; this.value=value">
            </div>
            <div style="padding: 15px;text-align: right" class="col-6">
                <h5 class="text-black-50 me-2">Χρονιά Επένδυσης: </h5>
            </div>
            <div style="padding: 15px" class="col-6">
                <input id="yearStartInvest" class="form-control;" type="number" min="1998" max="2020" step="1"
                       onfocus=" let value = this.value; this.value = null; this.value=value">
            </div>
            <div style="min-height: 15px" class="col-12"></div>
            <h3 id="ypologise" style="color: black;border: solid 2px white;cursor: pointer" class="text-center">
                <span style="background-color: whitesmoke;padding: 10px">Υπολόγισε</span></h3>
        </div>
        <br>
    </div>
    <!--            CAREFUL names of h5 elements to be same with markets_info objects names -->
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <div class="card">
                    <a href="specificmarket?#Nasdaq">
                        <img class="card-img-top" src="markets_ergaleia/nasdaq.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">NASDAQ</h5>
                            <div class="contextToAdd"></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="card">
                    <a href="specificmarket?#Dow Jones">
                        <img class="card-img-top" src="markets_ergaleia/dow-jones.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Dow Jones Industrial</h5>
                            <div class="contextToAdd"></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="card">
                    <a href="specificmarket?#FTSE">
                        <img class="card-img-top" src="markets_ergaleia/FTSE.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Financial Times Stock Exchange</h5>
                            <div class="contextToAdd"></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="card">
                    <a href="specificmarket?#S&P 500">
                        <img class="card-img-top" src="markets_ergaleia/s&p500.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Standard & Poor’s 500</h5>
                            <div class="contextToAdd"></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="card">
                    <a href="specificmarket?#Nikkei">
                        <img class="card-img-top" src="markets_ergaleia/NIKKEI.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Nikkei</h5>
                            <div class="contextToAdd"></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="card">
                    <a href="specificmarket?#Χρηματιστήριο Αθηνών">
                        <img class="card-img-top" src="markets_ergaleia/athens-market.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Χρηματιστήριο Αθηνών</h5>
                            <div class="contextToAdd"></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="card">
                    <a href="specificmarket?#Dax">
                        <img class="card-img-top" src="markets_ergaleia/DAX.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">DAX</h5>
                            <div class="contextToAdd"></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="card">
                    <a href="specificmarket?#WGBI">
                        <img class="card-img-top" src="markets_ergaleia/ftse-world-government.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">FTSE World Government Bond Index</h5>
                            <div class="contextToAdd"></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="card">
                    <a href="specificmarket?#MSCI">
                        <img class="card-img-top" src="markets_ergaleia/MSCI.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Morgan Stanley Capital International</h5>
                            <div class="contextToAdd"></div>
                        </div>
                    </a>
                </div>
            </div>

        </div>

    </div>
</div>
<script src="js_ergaleia/markets_info.js"></script>
<script type="text/javascript" src="js_ergaleia/jquery-3.6.0.min.js"></script>
<script defer src="js_ergaleia/pension-allMarkets.js"></script>
</body>
</html>

