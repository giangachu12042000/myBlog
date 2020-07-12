// import React from 'react';
// import { Images } from '../../assets'

// const noImage = Images.common.noImage

// class Image extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {};
//       this.fallback = this.fallback.bind(this);
//     }
//     fallback() {
//       this.setState({ failed: true });
//     };

//     componentDidUpdate(nextProp) {
//       if(nextProp.src !== this.props.src) {
//         this.setState({ failed: false });
//       }
//     }

//     render() {
//       const {className = '', width, height, alt ='', refs } = this.props;
//       if (this.state.failed) {
//         return <img ref={refs} src={noImage} className={className} alt={alt} width={width} height={height} />;
//       } else {
//         return <img ref={refs} onError={this.fallback} src={this.props.src}  className={className} width={width} height={height} alt={alt} />;
//       }
//     }
// }

// export default Image;
