import React from 'react'

class DersOlustur extends React.Component {
    constructor(props){
        super(props)

        this.state = { 
            
            userName :'',
            course : '',
            date : '',
        }
        
    }
    changeUsername = (event) => {
        this.setState({
            userName: event.target.value
        } )   
    }
    changeLesson = (event) => {
        this.setState({
            course: event.target.value
        } )   
    }
    changeDate = (event) => {
        this.setState({
            date: event.target.value
        } )
        console.log(this.date);   
    }

    alertName = (event) => {
        if(this.state.userName == '' || this.state.course == '' || this.state.date == '' ) {
            window.alert((`
            İnformations are missing`))
        }
        else{
            window.alert(`
            Username : ${this.state.userName},
            Course : ${this.state.course},
            Date : ${this.state.date}`)
        }
        this.setState({
            course: '',
            userName : '',
            date:''
        })
        event.preventDefault();
    }
    

    

    render() {
        return (
            <div className='container'>
                <div className='col-6 mx-auto'>
                    <div className='d-flex justify-content-center'>
                        <h1 className='App-header mt-3 justify-content-center rounded-3 mb-4 col-8'>Course List</h1>
                    </div>
                    <div >
                        <label htmlFor="exampleFormControlInput1" className="form-label ">Write Your Surname</label>
                        <input onChange={this.changeUsername} type='text' value={this.state.userName} placeholder='Write Username' className='form-control' />
                    </div>
                    <div>
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-2">Select Lesson</label>
                        <select onChange={this.changeLesson} value={this.state.course} className='form-select'>
                            <option className='text-center'>Select Lesson</option>
                            <option>typeScript</option>
                            <option>React</option>
                            <option>Angular</option>
                        </select>
                    </div>
                    <div>
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3 mx-2">Select Date</label>
                        <input onChange={this.changeDate} type='date' value={this.state.date}  className='form-control text-center'/>
                    </div>
                    <div>
                        <button onClick={this.alertName}  type='submit' className='btn btn-primary mt-3 col-4 ' >submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default DersOlustur