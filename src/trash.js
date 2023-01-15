<div className="podcast-list">
      <Card
              href={`/podcast/1`}
              image={{
                type: "circle",
                src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.blogs.es%2Fe1feab%2Fgoogle-fotos%2F1366_2000.jpg&imgrefurl=https%3A%2F%2Fwww.xatakamovil.com%2Ftutoriales%2Fgoogle-fotos-permite-cambiar-fecha-hora-imagenes-asi-puedes-hacerlo-iphone-android&tbnid=itttkkPiyFht8M&vet=12ahUKEwiX-vri_sn8AhVxkScCHbxqDZMQMygAegUIARDfAQ..i&docid=sgJTsYi79kKeSM&w=1366&h=772&q=imagen&ved=2ahUKEwiX-vri_sn8AhVxkScCHbxqDZMQMygAegUIARDfAQ",
                alt: 'podcast-avatar',
              }}
            >
              <div className="card">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <h2 className="card-title">{"ea"}</h2>
                <p className="card-subtitle">{"ea2"}</p>
              </div>
            </Card>
            <Card
              href={`/podcast/1`}
              image={{
                type: "circle",
                src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.blogs.es%2Fe1feab%2Fgoogle-fotos%2F1366_2000.jpg&imgrefurl=https%3A%2F%2Fwww.xatakamovil.com%2Ftutoriales%2Fgoogle-fotos-permite-cambiar-fecha-hora-imagenes-asi-puedes-hacerlo-iphone-android&tbnid=itttkkPiyFht8M&vet=12ahUKEwiX-vri_sn8AhVxkScCHbxqDZMQMygAegUIARDfAQ..i&docid=sgJTsYi79kKeSM&w=1366&h=772&q=imagen&ved=2ahUKEwiX-vri_sn8AhVxkScCHbxqDZMQMygAegUIARDfAQ",
                alt: 'podcast-avatar',
              }}
            >
              <div className="card">
                <h2 className="card-title">{"ea"}</h2>
                <p className="card-subtitle">{"ea2"}</p>
              </div>
            </Card>
        {/* {podcasts &&
          podcasts.map((podcast) => ( */}
            {/* <Card
              key={`${podcast.name}-${podcast.author}`}
              href={`/podcast/${podcast.id}`}
              image={{
                type: ImageTypeEnum.CIRCLE,
                src: podcast.imageURL,
                alt: 'podcast-avatar',
              }}
            >
              <div className="card">
                <h2 className="card-title">{podcast.name}</h2>
                <p className="card-subtitle">{podcast.author}</p>
              </div>
            </Card> */}
          {/* ))} */}
      </div>