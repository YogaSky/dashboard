import RegisterForm from "./page";

export default function RegisterLayout ({
    children,
}:{
    children:  React.ReactNode;
}){
    return (
        <html lang="en">
            <body>
                
                <RegisterForm /> 
                  
               
            </body>
        </html>
    )
}