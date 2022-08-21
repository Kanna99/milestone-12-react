class House extends ReadableStreamDefaultController.component{
    consrtuctor(props){
        super(props);
        this.state = {
            street: "cracker St.108",
            type:" Family House",
            color: "White",
            yearOfConstruction:1968
        };
    }
    reder(){
        return(
            <div>
                <h1>Introduction Example</h1>
            </div>
        );
    }
        }
    
