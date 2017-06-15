import {Component} from 'react';

class Index extends Component {

  static async getInitialProps({req, res, xhr}) {
    // console.dir(github);
    // if (req) {
    //   const c = Github.client();
    //   c.get('/users/ringohub', {}, (err, status, body, headers) => {
    //     console.log(body); // json object
    //   });
    // }

    const statusCode = res ? res.statusCode : (xhr ? xhr.status : null);
    return {statusCode};
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>{this.props.statusCode}</p>
      </div>
    );
  }
}

export default Index;
