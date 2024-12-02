import "./workshops.css"

function workshop() {
    return (
        <div className="workshop">
            <div className="work_top">
                <h5 className="headi headi_pad">OUR WORKSHOPS</h5>
                <h1 className="titl">Latest Blog Posts</h1>
            </div>
            <div className="workshop_card">
                <div className="left_card">
                    <div className="des_img">
                        <img src="./assets/blog-post-img1.png" alt="blog-post" />
                    </div>
                    <div className="des_about">
                        <div>Trend in Design</div>
                        <h1 className="description_blog">Protect Your Workplace From</h1>
                        <a href="">Read More</a>
                    </div>
                </div>
                <div className="right_card">
                    <div className="des_img">
                        <img src="./assets/blog-post-img2.png" alt="blog-post" />
                    </div>
                    <div className="des_about">
                        <div>Trend in Design</div>
                        <h1 className="description_blog">Protect Your Workplace From</h1>
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default workshop;