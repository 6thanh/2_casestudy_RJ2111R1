import * as React from 'react';
import Link from '@mui/material/Link';
import 'bootstrap/dist/css/bootstrap.css';

function Author() {
  return (
        <div className="footer">
            <footer className="text-center text-white" style={{backgroundColor: "#101F33"}}>

                <div className="text-center p-3" style={{backgroundColor: "#081627"}}>
                {'Copyright © '}
                <Link className="text-white" href="#">6thanh</Link>{' '}
                {new Date().getFullYear()}.
                </div>
            </footer>
        </div>
        
  );
}

export default Author;