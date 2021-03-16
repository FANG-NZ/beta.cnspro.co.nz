import React, {useLayoutEffect} from 'react'
import Head from 'next/head'


const data = [
    {
        id: 1,
        title: "Terraced Apartments",
        location: "Hamilton",
        image: 'project-41.jpg'
    },
    {
        id: 2,
        title: "Hills Apartments",
        location: "Hamilton",
        image: 'project-42.jpg'
    },
    {
        id: 3,
        title: "Penthouse Apartments",
        location: "Auckland",
        image: 'project-43.jpg'
    },
    {
        id: 4,
        title: "Courtyard Apartments",
        location: "Hamilton",
        image: 'project-44.jpg'
    },
    {
        id: 5,
        title: "Hills Apartments",
        location: "Hamilton",
        image: 'project-45.jpg'
    },
    {
        id: 6,
        title: "Courtyard Apartments",
        location: "Hamilton",
        image: 'project-46.jpg'
    },
    {
        id: 7,
        title: "Penthouse Apartments",
        location: "Hamilton",
        image: 'project-47.jpg'
    },
    {
        id: 8,
        title: "Terraced Apartments",
        location: "Hamilton",
        image: 'project-48.jpg'
    },
    {
        id: 9,
        title: "Hills Apartments",
        location: "Auckland",
        image: 'project-49.jpg'
    },
    {
        id: 10,
        title: "Terraced Apartments",
        location: "Hamilton",
        image: 'project-50.jpg'
    },
    {
        id: 11,
        title: "Penthouse Apartments",
        location: "Auckland",
        image: 'project-40.jpg'
    }
]


/**
 * defien the project item
 */
const ProjectItem = (props) => {
    const _project = props.project

    return(
        <div className="col-md-6 col-lg-4 isotope-item isotope-item-sizer">
            <article className="media-project-2 m-b-30">
                <figure className="media__img">
                    <img src={`https://freebw.com/templates/tatee/images/${_project.image}`} alt={_project.title} />
                </figure>
                <div className="media__body">
                    <h3 className="media__title">
                        <a href="#view">{_project.title}</a>
                    </h3>
                    <span className="address">{_project.location}</span>
                </div>
            </article>
        </div>
    )
}


export default function AllProjectsPage(){

    

    useLayoutEffect(() => {
        let _$iso;

        //init iso
        _$iso = $("#cnspro-all-projects").isotope({
            itemSelector: '.isotope-item',
            percentPosition: true,
            animationEngine : 'best-available',
            masonry: {
                columnWidth: '.isotope-item-sizer',
            }
        });

        _$iso.imagesLoaded().progress( function() {
            _$iso.isotope('layout');
        });

        //clearnup callback
        return()=>{
            _$iso.isotope('destroy')
        }
    }, [])

    return(
        <React.Fragment>
            <Head>
                <title>All projects - CNSPRO</title>
            </Head>

            <section className="section p-t-60 p-b-60">
                <div className="container">
                    <div className="page-heading">
                        <h4 className="title-sub title-sub--c8 m-b-15">Our projects</h4>
                        <h2 className="title-2">
                            We shape our buildings
                            <br/>
                            thereafter they shape us
                        </h2>
                    </div>
                </div>
            </section>

            <section className="section p-b-120">
                <div className="container">
                    <div className="masonry-row js-isotope-wrapper">
                        <div id="cnspro-all-projects" className="row isotope-content">

                            {data.map((item, index)=>{
                                return <ProjectItem key={item.id} project={item} />
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}