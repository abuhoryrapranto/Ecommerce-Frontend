<template>
  <div>
    <div id="page-top">
     <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <NuxtLink class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink" style="color: gray;"></i>
                </div>
                <div class="sidebar-brand-text mx-3" style="color: gray;">EC-Clients <sup>FE</sup></div>
            </NuxtLink>

            <!-- Divider -->
            <!-- <hr class="sidebar-divider my-0"> -->

            <!-- Divider -->
            <!-- <hr class="sidebar-divider"> -->

            <!-- Heading -->
            <div class="mt-3 ml-3 pb-3">
                <h6 style="color: #FE696A;">Categories</h6>
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <hr class="sidebar-divider d-none d-md-block" style="margin: 0px;">
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Electronics</span>
                </a>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Electronics Items:</h6>
                        <NuxtLink class="collapse-item" to="/phone">Phone</NuxtLink>
                        <a class="collapse-item" href="cards.html">Laptop</a>
                    </div>
                </div>
            </li>
            <hr class="sidebar-divider d-none d-md-block" style="margin: 0px;">

            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Grocery</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Grocery Items:</h6>
                        <a class="collapse-item" href="buttons.html">Something</a>
                        <a class="collapse-item" href="cards.html">Something</a>
                    </div>
                </div>
            </li>
            <hr class="sidebar-divider d-none d-md-block" style="margin: 0px;">

            <!-- Divider -->
            <!-- <hr class="sidebar-divider d-none d-md-block"> -->

            <!-- Sidebar Toggler (Sidebar) -->
            <div class="text-center d-none d-md-inline mt-3">
                <button class="rounded-circle border-0" id="sidebarToggle" style="background-color: #FE696A;"></button>
            </div>

        </ul>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                    <!-- Topbar Search -->
                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-success" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">

                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto w-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        <!-- Nav Item - Alerts -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bell fa-fw"></i>
                                <!-- Counter - Alerts -->
                                <span class="badge badge-danger badge-counter">3+</span>
                            </a>
                            <!-- Dropdown - Alerts -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 class="dropdown-header">
                                    Alerts Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-primary">
                                            <i class="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 12, 2019</div>
                                        <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-success">
                                            <i class="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 7, 2019</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-warning">
                                            <i class="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">December 2, 2019</div>
                                        Spending Alert: We've noticed unusually high spending for your account.
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </li>

                        <!-- Nav Item - Messages -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-cart-arrow-down"></i>
                                <!-- Counter - Messages -->
                                <span class="badge badge-danger badge-counter">{{this.$store.state.cart.count}}</span>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in cart-show"
                                aria-labelledby="messagesDropdown">
                                <h6 class="dropdown-header" v-show="this.$store.state.cart.count > 0">
                                    <span>Cart Items</span>
                                    <span class="float-right" @click="hideCartMenu"><i class="fas fa-times"></i></span>
                                </h6>

                                <div>
                                    <Cart></Cart>
                                </div>
                                <a class="dropdown-item text-center small text-gray-500" href="#" v-show="this.$store.state.cart.count > 0">Checkout</a>
                            </div>
                        </li>

                        <div class="topbar-divider d-none d-sm-block" v-if="!$auth.loggedIn"></div>
                        
                            <li class="nav-item dropdown no-arrow" v-if="!$auth.loggedIn">
                            <NuxtLink class="nav-link dropdown-toggle" to="/login">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Login</span>
                            </NuxtLink>
                            </li>

                        <div class="topbar-divider d-none d-sm-block" v-if="$auth.loggedIn"></div>
                        
                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow" v-if="this.$auth.user">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{$auth.user.full_name}}</span>
                                <img class="img-profile rounded-circle" src="img/undraw_profile.svg">
                            </a>
                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <Nuxt />

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2020</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <button class="btn btn-primary" @click="logout">Logout</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap core JavaScript-->
    <script src="js/jquery/jquery.min.js"></script>
    <script src="js/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="js/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

</div>
  </div>
</template>


<script>
import Cart from '../components/Cart';
export default {
    components: {
        Cart
    },
    data() {
        return {
            
        }
    },

    methods: {
        logout() {
            this.$auth.logout();
             $('#logoutModal').modal('hide')
        },

        hideCartMenu() {
            this.$nextTick(function(e) {
              $('.cart-show').removeClass('show');
            })
        }
    },

    mounted() {
       // console.log(JSON.parse(JSON.stringify(this.$store.state.cart.cart_items)));
    }
}
</script>

<style>
.container-fluid {
    margin-top: -23px !important;
}

.topbar .navbar-search {
  width: 55rem;
  border: 1px solid #1cc88a;
  border-radius: 7px;
}

.sidebar-dark .nav-item .nav-link {
  color: grey;
}

.sidebar-dark .nav-item .nav-link i {
  color: grey;
}

.sidebar-dark .nav-item .nav-link:active, .sidebar-dark .nav-item .nav-link:focus, .sidebar-dark .nav-item .nav-link:hover {
  color: #FE696A;
}

.sidebar-dark .nav-item .nav-link:active i, .sidebar-dark .nav-item .nav-link:focus i, .sidebar-dark .nav-item .nav-link:hover i {
  color: #FE696A;
}

.sidebar-dark .nav-item .nav-link[data-toggle="collapse"]::after {
  color: grey;
}

.sidebar-dark .nav-item.active .nav-link {
  color: grey;
}

.sidebar-dark .nav-item.active .nav-link i {
  color: grey;
}

.navbar {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1)  !important;
}

.sidebar {
    width: 25rem !important;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1)  !important;
}

.sidebar-brand {
    box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.1), 0 3px 0px 0 rgba(0, 0, 0, 0.1)  !important;
}

.sidebar-dark hr.sidebar-divider {
  background: #d9d9d9;
}

.sidebar hr.sidebar-divider {
    margin: 0 1rem 0rem;
}

@media (min-width: 768px) {
  .sidebar {
      background: white;
  }
  .sidebar .nav-item .collapse {
    position: relative;
    left: 0;
    z-index: 1;
    top: 0;
    -webkit-animation: none;
    animation: none;
  }
  .sidebar .nav-item .collapse .collapse-inner {
    border-radius: 0;
    box-shadow: none;
  }
  .sidebar .nav-item .collapsing {
    display: block;
    transition: height 0.15s ease;
  }
  .sidebar .nav-item .collapse,
  .sidebar .nav-item .collapsing {
    margin: 0 1rem;
  }
  .sidebar .nav-item .nav-link {
    display: block;
    width: 100%;
    text-align: left;
    padding: 1rem;
  }
  .sidebar .nav-item .nav-link i {
    font-size: 0.85rem;
    margin-right: 0.25rem;
  }
  .sidebar .nav-item .nav-link span {
    font-size: 1rem;
    font-weight: 500;
    display: inline;
  }
  .sidebar .nav-item .nav-link[data-toggle="collapse"]::after {
    width: 1rem;
    text-align: center;
    float: right;
    vertical-align: 0;
    border: 0;
    font-weight: 900;
    content: '\f107';
    font-family: 'Font Awesome 5 Free';
  }
  .sidebar .nav-item .nav-link[data-toggle="collapse"].collapsed::after {
    content: '\f105';
  }
  .sidebar .sidebar-brand .sidebar-brand-icon i {
    font-size: 2rem;
  }
  .sidebar .sidebar-brand .sidebar-brand-text {
    display: inline;
  }
  .sidebar .sidebar-heading {
    text-align: left;
  }
  .sidebar.toggled {
    overflow: visible;
    width: 6.5rem !important;
  }
  .sidebar.toggled .nav-item .collapse {
    position: absolute;
    left: calc(6.5rem + 1.5rem / 2);
    z-index: 1;
    top: 2px;
    -webkit-animation-name: growIn;
    animation-name: growIn;
    -webkit-animation-duration: 200ms;
    animation-duration: 200ms;
    -webkit-animation-timing-function: transform cubic-bezier(0.18, 1.25, 0.4, 1), opacity cubic-bezier(0, 1, 0.4, 1);
    animation-timing-function: transform cubic-bezier(0.18, 1.25, 0.4, 1), opacity cubic-bezier(0, 1, 0.4, 1);
  }
  .sidebar.toggled .nav-item .collapse .collapse-inner {
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
    border-radius: 0.35rem;
  }
  .sidebar.toggled .nav-item .collapsing {
    display: none;
    transition: none;
  }
  .sidebar.toggled .nav-item .collapse,
  .sidebar.toggled .nav-item .collapsing {
    margin: 0;
  }
  .sidebar.toggled .nav-item:last-child {
    margin-bottom: 1rem;
  }
  .sidebar.toggled .nav-item .nav-link {
    text-align: center;
    padding: 0.75rem 1rem;
    width: 6.5rem;
  }
  .sidebar.toggled .nav-item .nav-link span {
    font-size: 0.65rem;
    display: block;
  }
  .sidebar.toggled .nav-item .nav-link i {
    margin-right: 0;
  }
  .sidebar.toggled .nav-item .nav-link[data-toggle="collapse"]::after {
    display: none;
  }
  .sidebar.toggled .sidebar-brand .sidebar-brand-icon i {
    font-size: 2rem;
  }
  .sidebar.toggled .sidebar-brand .sidebar-brand-text {
    display: none;
  }
  .sidebar.toggled .sidebar-heading {
    text-align: center;
  }
}
body {
  margin: 0;
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #858796;
  text-align: left;
  background-color: #F6F9FC;
}

@media (max-width: 575.98px) {
    .sidebar.toggled {
  width: 0 !important;
  overflow: hidden;
}

.sidebar.toggled #sidebarToggle::after {
  content: '\f105';
  font-family: 'Font Awesome 5 Free';
  margin-left: 0.25rem;
}

.sidebar.toggled .sidebar-card {
  display: none;
}
}
</style>
