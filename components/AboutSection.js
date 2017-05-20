import AboutSection from './SectionTitle'
export default function About () {
  return (
    <div className='about'>
      <div className='header'>
        <div className='upsize'>2.0.0</div>
        <AboutSection>FIRST REACT MEETUP IN THAILAND</AboutSection>
      </div>
      <div className='content'>
        <div className='description'>
          จากเสียงตอบรับที่ดีใน 2 ครั้งที่ผ่านมา กับ React Bangkok 1.0.0 และ 1.1.0 เราได้กลับมาอีกครั้งกับ React Bangkok 2.0.0 ที่ยิ่งใหญ่กว่าเดิม และอัดแน่นไปด้วยความรู้และประสบการณ์จาก Speakers มากมาย
          หัวข้อที่จะมีในวันงานแบ่งเป็น 2 track คือ Beginner Track สำหรับผู้ที่มีพื้นฐาน React น้อย และ Intermediate Track สำหรับผู้ที่เขียน React มาบ้างพอสมควรแล้ว<br />
          ในวันที่ 3 มิถุนายน 2560 ณ สถาบันเทคโนโลยีปทุมวัน
        </div>
      </div>
      <style jsx>{`
        .upsize {
          font-size: 85px;
          line-height: 48px;
          text-transform: uppercase;
          margin: 0 0 30px;
        }   
        .about {
          max-width: 1060px;
          margin: 0 auto;
        }
       .header, .description {
          text-align: center;
        }
        .content > .description {
          text-indent: 10px;
        }
        @media (max-width: 767px) {
          .about {
            padding: 0 5.33%;
          }
        }
        @media (min-width: 768px) and (max-width: 1060px) {
          .about {
            width: 750px;
          }
        }
    `}</style>
    </div>
  )
}
