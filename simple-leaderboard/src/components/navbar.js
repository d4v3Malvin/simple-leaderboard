import { Link } from "react-router-dom"

const navbar = () => {


    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <Link to="/" className="navs-link" >
                        <h3 className="navbar-brand" >SIMPLE LEADERBOARD</h3>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="navs-link" to="/admin" >
                                    <h5>Admin</h5>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default navbar