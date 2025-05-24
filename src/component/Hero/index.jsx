import me from "../../assets/profile/me.jpg"

const Hero = () => {
    return (
        <section className="header-container">
            <img
                className="profile-image"
                src={me}
                alt=""
            />
            <h1>Hello, I'm Rahmat</h1>

            <div className="content-text">
                <h2>Creating digital</h2>
                <h2>products, brands, and experiences.</h2>

                <p>
                    A Frontend Web Developer passionate about building modern, responsive, and user-friendly interfaces.
                </p>
            </div>

            <div className="cta-action" >

                <a href="#projects"
                   
                    className="btn btn-primary"
                    // target="_blank"
                >View My Work</a>

                <a  href="mailto:rahmatsuhadi32@gmail.com"
                   
                    className="btn btn-secondary"
                    target="_blank"
                >Connect With Me</a>
            </div>

        </section>
    )
}

export default Hero