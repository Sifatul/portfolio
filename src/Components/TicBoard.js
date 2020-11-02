const Board = () =>{
return (
                <div class="d-flex board-container">

                    <div class="board my-4 mx-auto">
                        <div class="monitor">

                            <div class="option_box">
                                <div class="result option"></div>
                                <div class="col-6 col-sm-6 col-md-6 ">

                                    <div class="option" id="opt1"></div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-6 ">
                                    <div class="option" id="opt2"></div>
                                </div>


                            </div>

                            <div class=" back_button"><i class="fas fa-arrow-left"></i></div>


                        </div>
                        <div class="game_board">
                            <div class="row">
                                <div class="col-4 col-sm-4 col-md-4 ">
                                    <span class="move" data-move="0"></span>
                                </div>
                                <div class="col-4 col-sm-4 col-md-4 ">
                                    <span class="move" data-move="1"></span>
                                </div>
                                <div class="col-4 col-sm-4 col-md-4 ">
                                    <span class="move" data-move="2"></span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 col-sm-4 col-md-4 ">
                                    <span class="move" data-move="3"></span>
                                </div>
                                <div class="col-4 col-sm-4 col-md-4 ">
                                    <span class="move" data-move="4"></span>

                                </div>
                                <div class="col-4 col-sm-4 col-md-4 ">
                                    <span class="move" data-move="5"></span>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 col-sm-4 col-md-4 ">
                                    <span class="move" data-move="6"></span>
                                </div>
                                <div class="col-4 col-sm-4 col-md-4 ">
                                    <span class="move" data-move="7"></span>
                                </div>
                                <div class="col-4 col-sm-4 col-md-4 ">
                                    <span class="move" data-move="8"></span>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>)
};