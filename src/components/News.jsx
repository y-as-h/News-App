import React, { Component } from 'react'
import Loading from './Loading';
import Newstitle from './Newstitle';

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loader: false,
            page: 1,
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loader: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loader: false,
        });
    }

    handlenextclick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loader: true });
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loader: false,
            })
        }

    }
    handlepreclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loader: true })
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loader: false,

        })

    }
    render() {
        let { pageSize, category } = this.props;

        return (

            <div className="container my-3 ">
                <div className="row mb-3">
                    <h2 className='text-center ' style={{marginTop:'70px'}}>{`NewsZilla- Top ${category} Headlines`}</h2>
                </div>
                {this.state.loader && <Loading />}
                <div className='row'>
                    {!this.state.loader && this.state.articles.map((element) => {
                        return (
                            <div className=' col-md-4 mb-3' key={element.url}>
                                <Newstitle title={element.title ? element.title : " "} description={element.description ? element.description.slice(0, 70) : " "} author={element.author} time={element.publishedAt} imageurled={element.urlToImage} newsurl={element.url} source={element.source.name} />
                            </div>
                        )

                    })}
                </div>
                {!this.state.loader && <div className='container d-flex justify-content-evenly' style={{ overflow: 'hidden' }}>
                    <button disabled={this.state.page <= 1} onClick={this.handlepreclick} className='btn btn-primary'>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / { pageSize })} onClick={this.handlenextclick} className='btn btn-primary'>Next &rarr;</button>
                </div>}
            </div>

        )
    }
}
