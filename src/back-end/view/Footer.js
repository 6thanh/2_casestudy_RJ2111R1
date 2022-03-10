import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
  return (
        <div className="footer">
            <footer className="text-center text-white" style={{backgroundColor: "#101F33"}}>
                <div className="container p-4 pb-0">
                    <section className="">
                    <form action="">
                        <div className="row d-flex justify-content-center">
                        <div className="col-auto">
                            <label htmlFor="form5Example29">
                                <p className="pt-2">
                                <strong>Sign up for our newsletter</strong>
                                </p>
                            </label>
                        </div>

                        <div className="col-md-5 col-12">
                            <div className="form-outline form-white mb-4">
                            <input type="email" id="form5Example29" placeholder="Email address" className="form-control" />
                            </div>
                        </div>

                        <div className="col-auto">
                            <button type="submit" className="btn btn-outline-light mb-4">
                            Subscribe
                            </button>
                        </div>
                        </div>
                    </form>
                    </section>
                </div>

                <div className="text-center p-3" style={{backgroundColor: "#081627"}}>
                {'Copyright © '}
                <Link className="text-white" href="#">6thanh</Link>{' '}
                {new Date().getFullYear()}.
                </div>
            </footer>
        </div>
        
  );
}

export default Footer;