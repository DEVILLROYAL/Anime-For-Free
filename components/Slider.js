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
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{res.slides[0].release}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{res.slides[0].quality}</div>
                  <div id="slide-format" >{res.slides[0].format}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >{res.slides[0].spotlight}</div>               
                  <div id="slide-title" ><h4>{res.slides[0].name}</h4></div>
                    <div id="slide-des" ><p>{res.slides[0].anidesc}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                   <img src={res.slides[1].imageAnime} className="d-block w-100" alt={res.slides[1].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{res.slides[1].release}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{res.slides[1].quality}</div>
                  <div id="slide-format" >{res.slides[1].format}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >{res.slides[1].spotlight}</div>               
                  <div id="slide-title" ><h4>{res.slides[1].name}</h4></div>
                    <div id="slide-des" ><p>{res.slides[1].anidesc}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={res.slides[2].imageAnime} className="d-block w-100" alt={res.slides[2].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{res.slides[2].release}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{res.slides[2].quality}</div>
                  <div id="slide-format" >{res.slides[2].format}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >{res.slides[2].spotlight}</div>               
                  <div id="slide-title" ><h4>{res.slides[2].name}</h4></div>
                    <div id="slide-des" ><p>{res.slides[2].anidesc}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={res.slides[3].imageAnime} className="d-block w-100" alt={res.slides[3].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{res.slides[3].release}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{res.slides[3].quality}</div>
                  <div id="slide-format" >{res.slides[3].format}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >{res.slides[3].spotlight}</div>               
                  <div id="slide-title" ><h4>{res.slides[3].name}</h4></div>
                    <div id="slide-des" ><p>{res.slides[3].anidesc}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={res.slides[4].imageAnime} className="d-block w-100" alt={res.slides[4].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{res.slides[4].release}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{res.slides[4].quality}</div>
                  <div id="slide-format" >{res.slides[4].format}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >{res.slides[4].spotlight}</div>               
                  <div id="slide-title" ><h4>{res.slides[4].name}</h4></div>
                    <div id="slide-des" ><p>{res.slides[4].anidesc}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={res.slides[5].imageAnime} className="d-block w-100" alt={res.slides[5].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{res.slides[5].release}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{res.slides[5].quality}</div>
                  <div id="slide-format" >{res.slides[5].format}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >{res.slides[5].spotlight}</div>               
                  <div id="slide-title" ><h4>{res.slides[5].name}</h4></div>
                    <div id="slide-des" ><p>{res.slides[5].anidesc}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={res.slides[6].imageAnime} className="d-block w-100" alt={res.slides[6].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{res.slides[6].release}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{res.slides[6].quality}</div>
                  <div id="slide-format" >{res.slides[6].format}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >{res.slides[6].spotlight}</div>               
                  <div id="slide-title" ><h4>{res.slides[6].name}</h4></div>
                    <div id="slide-des" ><p>{res.slides[6].anidesc}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={res.slides[7].imageAnime} className="d-block w-100" alt={res.slides[7].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{res.slides[7].release}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{res.slides[7].quality}</div>
                  <div id="slide-format" >{res.slides[7].format}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >{res.slides[7].spotlight}</div>               
                  <div id="slide-title" ><h4>{res.slides[7].name}</h4></div>
                    <div id="slide-des" ><p>{res.slides[7].anidesc}</p></div>
                    </div>
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
