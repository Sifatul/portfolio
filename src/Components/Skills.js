const Skills = ()=>{
return (
        <div id="skill" class="py-2">

            <div class="row my-2">
                <p class="skill_title"> SKILL </p>
            </div>

            <div class="skill_box mx-auto py-2 ">
                <div class="row">
                    <div class="py-4" id="android">
                        <i class="fab fa-android"></i> <span class="px-2">ANDROID</span>
                    </div>
                    <div class="" id="html">
                        <i class="fa fa-wrench"></i> <span class="px-2">HTML</span>
                    </div>

                    <div class="" id="css">
                        <i class="fa fa-paint-brush"> </i> <span class="px-2">CSS</span>
                    </div>

                </div>

                <div class="d-flex flex-column   flex_container_1">
                    <div class=" d-flex flex-column py-2 flex_container_1" id="js">
                        <i class="fa fa-cog"></i> <span class="py-2">Js</span>
                    </div>
                    <div class="  d-flex flex-column  py-2 flex_container_1" id="java">
                        <i class="fab fa-java"></i> <span class="py-2">JAVA</span>
                    </div>

                </div>
                <div class="d-flex flex-column justify-content-center py-2" id="web">
                    <i class="fa fa-globe"></i> <span class="py-2">WEB Development</span>
                </div>

                <div class="  d-flex flex-column flex_container_1 ">
                    <div class="d-flex justify-content-center   flex-column py-2 flex_container_1" id="mysql">
                        <i class="fa fa-database"></i> <span class="py-2">MySql</span>
                    </div>
                    <div class="  d-flex flex-column justify-content-center py-2 flex_container_1" id="laravel">
                        <i class="fa fa-universal-access"></i> <span class="py-2">Laravel</span>
                    </div>
                </div>

            </div>


        </div> )
}
export default Skills;