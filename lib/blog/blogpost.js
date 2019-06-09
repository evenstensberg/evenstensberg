import React from 'react';

class BlogPost extends React.Component {
    render() {
        const {match: {params: {id}}} = this.props
        return(
            <div>hi {id}</div>
        )
    }
}

export default BlogPost;