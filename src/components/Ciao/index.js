import { Component } from "react";
import styles from './ciao.module.css';
class Ciao extends Component{
    constructor(props){
        super(props);
        this.state = {
            isGreeting:true
        }
    }
    handlerBtn = () => {
        const {isGreeting} = this.state;
        this.setState({
            isGreeting:isGreeting
        })
    }
    render(){
        const {name, id} = this.props;
        const {isGreeting} = this.state;
        if(isGreeting){
            return <>
            <h2 className={styles.container}>{id} Hi, {name}</h2>
            <button onClick={this.handlerBtn}>Ciao</button>
        </>
        }
        return <h2>Bye {name}!</h2>
    }
}
export default Ciao;