import React from 'react'
import Head from 'next/head'

const data = [
    {
        id: 1,
        title: "Terraced Apartments",
        location: "Hamilton",
        date: "AUG 2020",
        short_description: "Luxurious upper-level apartments with stunning views of the city, Waikato river and Mount Pirongia. The Penthouse Apartments comprise generous floor plans with substantial open-plan dining and living areas, complete with a designer kitchen and scullery, perfect for entertaining.",
        image: 'project-23.jpg',
    },
    {
        id: 2,
        title: "Hills Apartments",
        location: "Auckland",
        date: "JUN 2021",
        short_description: "Luxurious upper-level apartments with stunning views of the city, Waikato river and Mount Pirongia. The Penthouse Apartments comprise generous floor plans with substantial open-plan dining and living areas, complete with a designer kitchen and scullery, perfect for entertaining.",
        image: 'project-24.jpg',
    },
    {
        id: 3,
        title: "Penthouse Apartments",
        location: "Hamilton",
        date: "SEP 2021",
        short_description: "Luxurious upper-level apartments with stunning views of the city, Waikato river and Mount Pirongia. The Penthouse Apartments comprise generous floor plans with substantial open-plan dining and living areas, complete with a designer kitchen and scullery, perfect for entertaining.",
        image: 'project-25.jpg',
    },
    {
        id: 4,
        title: "Courtyard Apartments",
        location: "Auckland",
        date: "SEP 2021",
        short_description: "Luxurious upper-level apartments with stunning views of the city, Waikato river and Mount Pirongia. The Penthouse Apartments comprise generous floor plans with substantial open-plan dining and living areas, complete with a designer kitchen and scullery, perfect for entertaining.",
        image: 'project-26.jpg',
    }
]


const ProejctSection = (props) => {
    const _project = props.project
    const _isOdd = props.isOdd

    return(
        <section>
            <div className="wrap wrap--w1790">
                <div className="container-fluid">
                    <article className={`media-project-3 ${_isOdd ? "right" : ""}`}>
                        <div className="media__body">
                            <figure className="media__img">
                                <a href="#view">
                                    <img src={`https://freebw.com/templates/tatee/images/${_project.image}`} alt={_project.title} />
                                </a>
                            </figure>
                            <span className="add">{_project.location}</span>
                            <span className="year">{_project.date}</span>
                            <div className="media__content">
                                <div className="pointer"></div>
                                <h4 className="title-sub title-sub--c8">architecture</h4>
                                <h2 className="title-3">{_project.title}</h2>
                                <p className="media__text">{_project.short_description}</p>
                                <a className="au-btn au-btn--arrow" href="#view">
                                    See more
                                    <i className="zmdi zmdi-arrow-right ic-arrow"></i>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}



export default function NewProjects(){

    return(
        <React.Fragment>
            <Head>
                <title>New projects - CNSPRO</title>
            </Head>

            <section className="section p-t-60 p-b-60">
                <div className="container">
                    <div className="page-heading">
                        <h4 className="title-sub title-sub--c8 m-b-15">coming soon</h4>
                        <h2 className="title-2">Our new projects</h2>
                    </div>
                </div>
            </section>

            {data.map((item, index) => {
                return <ProejctSection key={item.id} project={item} isOdd={index % 2 > 0?true:false}/>
            })}
        </React.Fragment>
    )
}