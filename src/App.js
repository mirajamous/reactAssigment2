import react from 'react';
import './App.css';

class App extends react.Component {
  constructor(props) {

    super(props);

    this.state = {
      title: "",
      describtion: "",
      titleChanged: "",
      describtionChanged: "",
      showDivOne: false,
      counter: 0,
      counterflag: false,
      arrayOfDiv: [],
      arrayOfDiv2:[],
      filterArray: [],
      buttonText: 'Add',
      index:0

    }

  }

  onTitleChange = (e) => {

    let value = e.target.value;
    this.setState({
      title: value
    })
  }
  onDescriptionChanged = e => {
    let value = e.target.value;
    this.setState({
      describtion: value
    })
  }

   onAddClicked(e) {
    e.preventDefault();
    const titleFormatted = `${this.state.title}`;
    const descriptionFormatted = `${this.state.describtion}`;
    if (titleFormatted !== "" && titleFormatted !== " " && descriptionFormatted !== "" && descriptionFormatted !== " ") {
      if (this.state.buttonText === "Add") {
        if (this.state.arrayOfDiv.length < 2) {
          this.state.arrayOfDiv.push({
            title: titleFormatted,
            describtion: descriptionFormatted,
          })

          this.setState({
            showDivOne: true,
            title: this.state.title = '',
            description: this.state.describtion = '',

          });
        }
       
      } else {
        const titleFormatted2 = `${this.state.title}`;
    const descriptionFormatted2 = `${this.state.describtion}`;

   let obj1={ 
    title:titleFormatted2,
    describtion:descriptionFormatted2
   }
    this.state.arrayOfDiv[this.state.index]=obj1;
    // this.state.arrayOfDiv.splice(this.state.index,1,obj1)

          this.setState({
          //  arrayOfDiv:obj1,
        //   title:titleFormatted2,
        //  describtion:descriptionFormatted2,
           buttonText:"Add",
          title:"",
           describtion:""
          })


        }
    }


  }
  resetbutton(e) {
    e.preventDefault();
    this.setState({
      title: this.state.title = '',
      description: this.state.describtion = '',
      buttonText:"Add"
    })
  }


  UpdateValue = (idx) => {
    const tit = this.state.arrayOfDiv[idx].title;
    const desc = this.state.arrayOfDiv[idx].describtion;
    const titFormat = `${tit}`;
    const descFormat = `${desc}`;
    this.setState({
      buttonText: "Update",
      title: titFormat,
      describtion: descFormat,
      index:idx
    })

 
  }

  deleteElement = idx => {
    let temparr = [...this.state.arrayOfDiv]
    temparr.splice(idx, 1)
    this.setState({
      arrayOfDiv: temparr
    })
  }

  // divTow() {
  //   this.state.counter = this.state.counter + 1;
  //   if (this.state.counter === 1) {
  //     this.state.counterflag = true;
  //   }

  // }


  render() {
    return (
      <div>


        <form >
          <h1 className='head'> Simple Todo List App </h1>
          <div>
            <label htmlFor='Title'>Title</label><br />
            <input
              value={this.state.title}
              // ref={(ref) => this.titleRef = ref}
              onChange={(event) => this.onTitleChange(event)}
              type="text"
              id="title"
            />
          </div>

          <div>
            <label htmlFor='Description'>Description</label><br />
            <textarea
              value={this.state.describtion}
              id="textArea"
              name='textArea'
              cols="30" rows="6"
              // ref={(ref) => this.DescriptionRef = ref}
              onChange={(event) => this.onDescriptionChanged(event)}
            />
          </div>

          <div>
            <button onClick={this.onAddClicked.bind(this)}> {this.state.buttonText} </button>
            <button onClick={this.resetbutton.bind(this)}>Reset</button>
          </div>
        </form>

        <div>
          {this.state.arrayOfDiv.map((arrayOfDiv, idx) => (
            <div key={idx}>
              <hr />

              {idx === 0 ? <h3>My First Todo List</h3> : <h3>My Secound Todo List</h3>}

              <div>{arrayOfDiv.title}</div>
              <div> {arrayOfDiv.describtion}</div>
              <button className='edit' onClick={() => this.UpdateValue(idx)}> Edit </button>
              <button onClick={() => this.deleteElement(idx)}> Delete </button>
            </div>
          ))}


        </div>

      </div>
    );


  }

}



export default App;
