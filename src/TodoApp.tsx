import * as React from 'react';
import  {render} from 'react-dom';
import Header from './header/Header';

const TodoApp = () => {
    return(
        <div className="todo-app">
            <Header name="Hello" secondName="World"/>
        </div>
    )

};

render(<TodoApp />, document.getElementById('todo-app'));