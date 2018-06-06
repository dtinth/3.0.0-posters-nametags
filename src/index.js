import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './design'
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

function Text({ children, tight }) {
  return (
    <span style={{ letterSpacing: tight ? '-0.05em' : 0 }}>{children}</span>
  )
}
function At() {
  return <span style={{ opacity: 0.5, margin: '0' }}> @ </span>
}

const speakers = {
  gucode: (
    <Speaker
      name={
        <Text>
          Jirat Kijlerdpornpailoj &<br />Suwitcha Sugthana (Gucode)
        </Text>
      }
      position=""
      title={
        <Text>
          Build Awesome Static Website<br /> with Gatsby.js
        </Text>
      }
      description={
        <Text>
          เราจะพาทุกท่านรับชมการสร้างเว็บไซต์ Gucode แล้ว deploy ไปยัง Github
          Pages ด้วยสิ่งที่เรียก Gatsby.js ซึ่งเป็น static site generator for
          React
        </Text>
      }
      photo={require('./photo/gucode.png')}
    />
  ),
  keya_desai: (
    <Speaker
      name="Keya Desai"
      position={
        <Text>
          Lead Consultant Developer<br />ThoughtWorks
        </Text>
      }
      title="Animation"
      description=""
    />
  ),
  manatsawin_hanmongkolchai: (
    <Speaker
      name="Manatsawin Hanmongkolchai"
      position={
        <div>
          Junior Architect<At />Wongnai
        </div>
      }
      title="State Management with MobX"
      description={
        <div style={{ fontWeight: 300 }}>
          <div style={{ fontWeight: 400 }}>ใครว่า React มีแค่ Redux?</div>
          มารู้จักกับ MobX ที่จะทำให้ state management<br />
          ในแอพของคุณเป็นเรื่องง่ายยย
        </div>
      }
      photo={require('./photo/manatsawin.png')}
    />
  ),
  phoomparin_mano: (
    <Speaker
      name="Phoomparin Mano"
      position={
        <div>
          Developer<At />iTAX
        </div>
      }
      title="Fast and Furious Development with React Design Patterns 🔥"
      description="How you can use a set of Design Patterns to make your codebase easier to reason about and more concise to write, so you can express your ideas and ship to production in record time."
      descriptionScale={9 / 10}
      photo={require('./photo/phoom.jpg')}
    />
  ),
  jessada_trirongkit: (
    <Speaker
      name="Jessada Trirongkit"
      position={
        <div>
          Software Engineer<At />Oozou
        </div>
      }
      title="Super fast static site with Next.js"
      description={
        <Text>
          How I optimized my Next.js static-exported sites with data spitting
          and prefetching (which Next.js doesn’t provide out of the box).
        </Text>
      }
      photo={require('./photo/aun.jpg')}
    />
  ),
  veha_suwatphisankij: (
    <Speaker
      name="Veha Suwatphisankij"
      position={
        <div>
          Full Stack Engineer <At /> Appsmith Thailand
        </div>
      }
      title={
        <Text tight>
          {/* React and Redux in Another Perspective: */}
          How Writing Web Apps in ClojureScript Can Help You Shape Idea of React
          Better
        </Text>
      }
      description={
        <Text tight>
          React fundamental idea is data-driven, functional view, view result
          based only on data (prop and state). and redux is functional data flow
          with immutable data store framework. but when Implement that idea on
          language that does not fit the idea, the result can be cumbersome. in
          the parallel world, the Clojurescript fundamental idea is immutable,
          functional programming and data-driven. In this talk, I will show you
          how each piece of the idea fit together in Cljs, "reagent" and
          "re-frame" (react and redux in Cjls world). and hopefully, you can
          pick some idea from Cljs to your current react project
        </Text>
      }
      descriptionScale={4 / 5}
      photo={require('./photo/veha.jpg')}
    />
  ),
  christopher_ng: (
    <Speaker
      name="Christopher Ng"
      position={
        <div>
          Mobile developer<At />Event Pop
        </div>
      }
      title="Kotlin ❤️  React"
      description={
        <div>
          Kotlin เป็นภาษาที่ดี และทุกคนก็รัก React <br />
          มาดูกันว่าเราจะผสมของสองสิ่งนี้ขึ้นมาได้อย่างไร
        </div>
      }
      photo={require('./photo/babe.jpg')}
    />
  ),
  komkanit_sujautra: (
    <Speaker
      name="Komkanit Sujautra"
      position={
        <div>
          Intern<At />Jitta
        </div>
      }
      title="My First Time with GraphQL on Production"
      description={
        <Text tight>
          การตัดสินใจทดลองใช้ GraphQL ขึ้น Production ครั้งแรกในงานสเกลใหญ่
          จะเจ็บปวดแค่ไหน ข้อดีข้อเสียอะไรบ้าง ควรใช้หรือควรหนีไป (พูดถึง
          Next.js, Apollo, GraphQL)
        </Text>
      }
      photo={require('./photo/cal.jpg')}
    />
  ),
  rujira_aksornsin: (
    <Speaker
      name="Rujira Aksornsin"
      position={
        <div>
          Lead Frontend Developer<At />AppMan
        </div>
      }
      title="React Performance Tuning"
      // descriptionScale={7 / 8}
      description={
        <div>
          เมื่อ React application ที่เราทำ ไม่ได้รู้สึกเร็วอีกต่อไปแล้ว
          มารีวิวจุดผิดพลาด และข้อแก้ไขวิธีต่างๆ ที่ช่วยให้ app ของเรา smooth
          แบบ 60fps ถึงแม้ว่าจะเป็น mobile web ก็นึกว่าเล่น native app อยู่
        </div>
      }
      photo={require('./photo/holly.jpg')}
    />
  ),
  chakrit_likitkhajorn: (
    <Speaker
      name="Chakrit Likitkhajorn"
      position={
        <div>
          VP<At />Taskworld
        </div>
      }
      title="State Management in React Apps"
      descriptionScale={4 / 5}
      description={
        <div>
          Redux, MobX, Flux pattern หรือ pure React? <br />
          เรามีเครื่องมือจัดการ state ใน App มากมายให้เลือก ใน Talk นี้ <br />เราจะมาเจาะลึกกันว่าทำไมบางคนชอบ
          Redux ทำไมบางคนชอบ MobX ทำไม Dan ถึงบอกว่าอย่ารีบใช้อะไรมากกว่า pure
          React​<br /> ตกลงการใช้มันเป็นเรื่องความชอบส่วนบุคคล
          หรือเรื่องเลือกของให้เหมาะกับงานกันแน่นะ เราจะเจาะประเด็นนี้กัน
        </div>
      }
      offsetDescription={70}
      photo={require('./photo/chrisza.jpg')}
    />
  ),

  pallop_chaoputhipuchong: (
    <Speaker
      name="Pallop Chaoputhipuchong"
      position={<div>Software Engineer</div>}
      title="Testing React Applications"
      description={
        <Text>
          Go through between the various forms of testing. Showcase tools and
          libraries that can help people test their applications for individual
          cases.
        </Text>
      }
      photo={require('./photo/ham.jpg')}
    />
  ),
  tananan_tangthanachaikul: (
    <Speaker
      name="Tananan Tangthanachaikul"
      position={
        <div>
          Full-stack Developer<At />TakeMeTour
        </div>
      }
      title={
        <div>
          Experience from building a mobile app in a month using Expo & GraphQL
        </div>
      }
      // descriptionScale={3 / 4}
      description={
        <div>
          หากใครกำลังตัดสินใจที่จะเริ่มทำ Mobile App ด้วย Expo โปรดฟังก่อน!
        </div>
      }
      photo={require('./photo/benz.jpg')}
    />
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <SpeakerStudio />
              <hr />
              <div style={{ fontSize: 80, margin: '40px 0' }}>Example</div>
              {Object.keys(speakers).map(key => {
                const url = '/' + key
                return (
                  <Link to={url}>
                    <div style={{ display: 'inline-block', margin: 10 }}>
                      {speakers[key]}
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        />
        <Route
          path="/:key"
          render={({ match }) => {
            const speaker = speakers[match.params.key]
            if (!speaker) {
              return <Redirect to="/" />
            }
            return speaker
          }}
        />
      </Switch>
    </Router>
  )
}

class SpeakerStudio extends React.Component {
  state = {
    name: 'Name',
    position: 'Position',
    title: 'Talk Title Should Fit Inside a Single Line',
    description:
      'Talk description then goes on. Ideally, it should not be longer than three lines.',
    photo: require('./connor2.png'),
    scale: 1,
    descriptionScale: 1
  }
  render() {
    const renderField = k => (
      <div>
        <span style={{ fontSize: '60px' }}>{k}: </span>
        <input
          type="text"
          value={this.state[k]}
          onChange={e => {
            this.setState({ [k]: e.target.value })
          }}
          style={{ fontSize: '60px' }}
        />
      </div>
    )
    return (
      <div style={{ margin: '40px 10px' }}>
        <div style={{ fontSize: 80, marginBottom: 40 }}>
          Create your own speaker poster
          <br />
          <div style={{ fontSize: 40 }}>Zoom out to use it</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 'none' }}>
            <Speaker
              {...this.state}
              scale={+this.state.scale}
              descriptionScale={+this.state.descriptionScale}
            />
          </div>
          <div style={{ flex: 'none', padding: 40, border: '1px solid #222' }}>
            {renderField('name')}
            {renderField('position')}
            {renderField('title')}
            {renderField('scale')}
            {renderField('photo')}
            <textarea
              value={this.state.description}
              onChange={e => {
                this.setState({ description: e.target.value })
              }}
              style={{ fontSize: '60px', width: '20em', height: '5em' }}
            />
            {renderField('descriptionScale')}
          </div>
        </div>
      </div>
    )
  }
}

function Speaker({
  name,
  position,
  title,
  description,
  photo,
  logo,
  scale = 1,
  descriptionScale = 1,
  offsetDescription = 0
}) {
  return (
    <div
      style={{
        background: `url(${require('./speaker_blank.png')})`,
        width: 1272,
        height: 1800,
        position: 'relative'
      }}
    >
      <div
        key={photo || 'default'}
        style={{
          position: 'absolute',
          width: 376,
          height: 376,
          top: 300,
          borderRadius: '50%',
          background: `url(${photo ||
            require('./connor2.png')}) center no-repeat`,
          backgroundSize: 'cover',
          overflow: 'hidden',
          left: '50%',
          marginLeft: 376 / -2
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 45,
          right: 45,
          top: 710,
          textAlign: 'center',
          color: 'white',
          fontFamily: `Metropolis`,
          fontSize: 60 * scale,
          lineHeight: `${90 * scale}px`
        }}
      >
        <div style={{ height: 270 - offsetDescription }}>
          <div style={{ color: '#00d8ff', fontWeight: 600 }}>{name}</div>
          <div style={{}}>{position}</div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: 180
          }}
        >
          <div style={{ fontWeight: 700, flex: 1 }}>{title}</div>
        </div>
        <div
          style={{
            fontFamily: `Noto Sans Thai UI, Noto Sans`,
            fontSize: `${descriptionScale * 0.9}em`,
            lineHeight: `${90 * scale * descriptionScale}px`
          }}
        >
          {description}
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept(() => {})
}
