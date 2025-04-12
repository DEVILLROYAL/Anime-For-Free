export default async function Slider() {
  const url = 'https://aniwatch-api-v1-0.onrender.com/api/parse';
  const data = await fetch(url);
  let res = await data.json();
  return (
    <>
                  <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={res.slides[0].imageAnime} className="d-block w-100" alt={res.slides[0].id} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{res.slides[0].name}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                   <img src={res.slides[1].imageAnime} className="d-block w-100" alt={res.slides[1].id} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{res.slides[1].name}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={res.slides[2].imageAnime} className="d-block w-100" alt={res.slides[2].id} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{res.slides[2].name}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={res.slides[3].imageAnime} className="d-block w-100" alt={res.slides[3].id} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{res.slides[3].name}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={res.slides[4].imageAnime} className="d-block w-100" alt={res.slides[4].id} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{res.slides[4].name}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={res.slides[5].imageAnime} className="d-block w-100" alt={res.slides[5].id} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{res.slides[5].name}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={res.slides[6].imageAnime} className="d-block w-100" alt={res.slides[6].id} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{res.slides[6].name}</h5>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={res.slides[7].imageAnime} className="d-block w-100" alt={res.slides[7].id} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{res.slides[7].name}</h5>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
    </>
  )
}
