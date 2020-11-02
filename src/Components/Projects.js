const Projects = () => {
    return ( <div id="projects" class="py-4 ">

                        <div class="container">
                            <h2>Projects</h2>
                        </div>


                        <div class=" py-2 card-columns container">


                            <div class="card ">
                                <img src="assets/img/speaknow.PNG" class="card-img-top" alt="..." data-toggle="modal"
                                     data-target="#speakNowModal" />
                                <div class="card-body">
                                    <a href="https://www.speaknow.ai/webapp/main" target="_blank">
                                        <h5 class="card-title">Speaknow.ai</h5>
                                    </a>
                                    <div class="row d-flex flex-row justify-content-around">
                                        <button type="button" class="btn btn-dark d-inline mt-1">
                                            <i class="fas fa-hashtag"></i> <span>AngularJs</span>
                                        </button>
                                        <button type="button" class="btn btn-dark d-inline  mt-1">
                                            <i class="fas fa-hashtag"></i> <span>NodeJs</span>
                                        </button>
                                        <button type="button" class="btn btn-dark d-inline  mt-1">
                                            <i class="fas fa-hashtag"></i> <span>REST API</span>
                                        </button>
                                        <button type="button" class="btn btn-dark d-inline  mt-1">
                                            <i class="fas fa-hashtag"></i> <span>MEAN Stack</span>
                                        </button>
                                        <button type="button" class="btn btn-dark d-inline  mt-1">
                                            <i class="fas fa-hashtag"></i> <span>MongoDb</span>
                                        </button>
                                        <button type="button" class="btn btn-dark d-inline  mt-1">
                                            <i class="fas fa-hashtag"></i> <span>Express</span>
                                        </button>
                                    </div>
                                    <p class="card-text py-2">An english teaching platform through AI technology </p>
                                    <a href="https://www.speaknow.ai/webapp/main" target="_blank"
                                       class="btn btn-primary">LIVE SITE</a>
                                </div>
                            </div>

                            <div class="modal fade  px-4 container" id="obhaiModal" tabindex="-1" role="dialog"
                                 aria-labelledby="obhaiModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered max-width-full" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">

                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="container d-flex flex-wrap flex-row justify-content-between">
                                                <img src="assets/img/obhai.jpg" class="img-fluid col-md-3"
                                                     alt="Responsive image" />
                                                <div class=" col-md-8  px-3">
                                                        <span class="line-height-1-25">OBHAI is a product of MGH group, Bangladesh.
                                                            During my
                                                            tenure at MGH group I built OBHAI from a broken bone to version 1.2. As
                                                            a team we updated the libraries, updated the design and implemented new
                                                            features.
                                                        </span>

                                                    <h5 class="modal-title py-2">Features</h5>
                                                    <hr class="m-0" />
                                                    <ul>
                                                        <li class="line-height-1-25">Real-time tracking of users with Google Map
                                                        </li>
                                                        <li class="line-height-1-25">Firebase notification</li>
                                                        <li class="line-height-1-25">Digital payment system</li>
                                                    </ul>
                                                    <a href="https://play.google.com/store/apps/details?id=com.obhai&hl=en"
                                                       target="_blank" class="btn btn-primary mt-4">Play Store </a>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> )
}
export default Projects;