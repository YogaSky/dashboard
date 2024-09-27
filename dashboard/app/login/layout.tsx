import LoginForm from "./page";




export default function RegisterLayout ({
    children,
}:{
    children:  React.ReactNode;
}){
    return (
        <html lang="en">
            <body>
                
               <LoginForm />
                  
               
            </body>
        </html>
    )
}