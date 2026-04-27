import path from "path";
import fs from "fs/promises";
import { useSelector } from "react-redux";
import { LayoutTwo } from "@/layouts";

import ContactFormIr from "@/components/contactFormIr/contactFormIr";




function VidaDubaiMall(props) {



  return (
    <>
      <LayoutTwo topbar={true}>
        
<h1 className="dasa" style={{
  fontWeight: '700',
  color: '#1a1a1a',
  textAlign: 'center',
  marginBottom: '10px'
}}>در صورت تمایل اطلاعات خود را ثبت کنید تا مشاور حرفه ای ما با شما تماس بگیرد</h1>
<p  style={{
  fontSize: '20px',
  fontWeight: '500',
  color: '#666',
  textAlign: 'center',
  marginBottom: '40px'
}}>Vida Dubai Mall</p>
  <section id="contact-form" style={{marginBottom:'60px',marginTop:'60px'}}>
    <ContactFormIr />
  </section>
   

        <style jsx>{`
  .responsive-container {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  }
 @media (min-width: 768px) {
.cfor{
display:none;
}
        }
  .dasa{
  font-size:32px;}
  @media (max-width: 768px) {
  .dasa{
  font-size:24px;}
    .responsive-container {
      flex-direction: column;
      align-items: center;
    }
  }
    
.react-tel-input {
  direction: rtl !important;
}

`}</style>

      </LayoutTwo>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "src/data/hero/", "index.json");
  const Herodata = JSON.parse(await fs.readFile(filePath));

  return {
    props: {
      Herodata,
    },
  };
}

export default VidaDubaiMall;
