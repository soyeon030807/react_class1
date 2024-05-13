import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [글제목] = useState([
    '🦖제주도🤿 : 푸른 바다와 신비로운 자연의 섬, 한국의 휴양 천국', 
    '🛬일본🗻 : 현대와 전통이 공존하는 동양의 보석 상자', 
    '🏝️필리핀🏄‍♀️ : 비경의 아름다움이 넘치는 푸른 대양의 보석', 
    '🍝이탈리아🎨 : 로맨틱한 분위기 속에 펼쳐지는 예술과 역사의 나라, 이탈리아'
  ]);
  const [하트, 하트변경] = useState([0, 0, 0, 0]);
  const [날짜] = useState(['2023년 04월 13일', '2023년 04월 23일', '2023년 04월 22일', '2021년 01월 02일']);
  const [상세내용] = useState([
    {
      내용: (
        <h1 style={{ fontWeight: 'bold', fontSize: '25px' }}>
          🌴 제주도 여행 블로그 - 푸른 바다와 신비로운 자연의 섬
        </h1>
      ),
      추가설명: (
        <div>
          <strong className="intro">🌺소개🌺</strong><br />
          제주도는 한국의 남쪽에 위치한 아름다운 섬으로, 푸른 바다와 우리나라의 다채로운 자연 경관을 갖추고 있습니다. 이곳은 다양한 관광 명소와 맛있는 음식, 그리고 특별한 문화를 경험할 수 있는 곳으로 유명합니다. 이 블로그에서는 제주도 여행의 매력과 다양한 경험을 소개하고자 합니다.
          <br />
          <strong className="travel-spots">🌴여행 명소🌴</strong>
          <ul>
            <li>1. 한라산⛰️ - 한라산은 제주도의 가장 높은 산으로, 제주도의 상징적인 자연 명소입니다. 여름에는 신비로운 운세를 내는 '구름다리'와 함께 한라산을 등반하는 것이 인기 있는 활동입니다.</li>
            <li>2. 성산일출봉🌅 - 제주도에서 가장 아름다운 일출을 감상할 수 있는 곳으로 알려져 있습니다. 일출 시간에 많은 관광객들이 이곳을 찾아와 아름다운 풍경을 감상합니다.</li>
            <li>3. 용눈이오름🏞️ - 우리나라의 우주 자연 명소로 지정된 용눈이오름은 제주도의 아름다운 풍경과 푸른 바다를 한눈에 볼 수 있는 곳입니다.</li>
          </ul>
          <strong className="travel-spots">🍖음식과 문화🦪</strong>
          <ul>
            <li>1. 흑돼지 바베큐 - 제주도에서는 흑돼지 바베큐가 유명합니다. 신선한 흑돼지고기를 구워 먹는 경험은 제주 여행의 하이라이트 중 하나입니다.</li>
            <li>2. 해산물 요리 - 제주도는 바다가 가까워 신선한 해산물을 맛볼 수 있는 곳입니다. 특히 해녀들의 손맛이 담긴 해산물 요리는 현지 음식 중에서도 특별한 맛을 선사합니다.</li>
          </ul>
        </div>
      )
    },
    {
      내용: (
        <h1 style={{ fontWeight: 'bold', fontSize: '25px' }}>
          🛫 일본 여행 블로그 🎌
        </h1>
      ),
      추가설명: (
        <div>
          안녕하세요! 오늘은 일본 여행에 관한 소식을 전해드릴게요. <br />
          <strong className="intro">🗻 일본의 아름다운 자연 경관 🗻</strong><br />
          일본은 아름다운 자연 경관으로 유명합니다. 일본의 산악 지형과 강이 어우러진 풍경은 모두가 반할 만큼 아름답습니다. 🌸 봄에는 벚꽃이 만개하여 전국이 분홍빛으로 물들어 일본의 아름다움을 더욱 빛나게 합니다.
          <br />
          <strong className="travel-spots">🎎 일본의 문화와 역사 🎎</strong>
          <ul>
          일본은 오랜 역사와 독특한 문화를 자랑합니다. 전통적인 건축물, 신사, 사원 등에서는 일본의 고대 역사와 예술을 만날 수 있습니다. 🍱 또한 일본의 고유한 문화 요소인 차 문화, 고베의 사쿠란보 등도 매력적인 관광지로 알려져 있습니다.
          </ul>
          <strong className="travel-spots">🍣 일본의 맛있는 음식 🍣</strong>
          <ul>
          일본은 세계적으로 유명한 다양한 음식 문화를 가지고 있습니다. 🍜 신선한 초밥, 깔끔한 라멘, 매콤한 카레 등 다양한 음식을 맛볼 수 있습니다. 🍣 또한 일본의 스시와 와규 등은 세계적으로도 유명한 맛집으로 손꼽힙니다.
          </ul>
          <strong className="travel-spots">🌟 일본 여행의 매력 🌟</strong>
          <ul>
          일본은 그 독특한 문화와 풍경, 음식 등으로 많은 이들의 꿈과 여행지로 손꼽힙니다. 일본 여행은 색다른 경험과 추억을 만들어주는 동시에, 다양한 매력을 발견할 수 있는 특별한 여행지입니다.
          </ul>
          이상으로 일본 여행에 대한 간략한 소개를 마치겠습니다. 새로운 경험과 여행의 즐거움이 함께하길 바랍니다!
        </div>
      )
    },
    {
      내용: (
        <h1 style={{ fontWeight: 'bold', fontSize: '25px' }}>
          🏝️ 필리핀 여행 블로그 🏄‍♀️
        </h1>
      ),
      추가설명: (
        <div>
          안녕하세요! 오늘은 필리핀 여행에 관한 이야기를 나누어 보려고 합니다. <br />
          <strong className="intro">🌴 필리핀의 멋진 자연 풍경 🌴</strong><br />
          필리핀은 아름다운 해변과 푸른 바다로 유명한 국가입니다. 여기서는 다양한 해안선과 섬들이 매력적인 풍경을 자랑합니다. 필리핀의 여행지 중 하나로는 세부와 보라카이가 유명합니다. 🏖️ 해변에서의 즐거운 시간과 해양 활동은 모두가 기억에 남을만한 경험이 될 것입니다.
          <br />
          <strong className="travel-spots">🏛️ 필리핀의 문화와 역사 🏛️</strong>
          <ul>
          필리핀은 다양한 문화와 역사적 유산을 갖고 있습니다. 과거에는 스페인의 식민지였던 역사적인 배경을 갖고 있으며, 이는 현재까지도 필리핀의 문화와 건축물에 영향을 미치고 있습니다. 필리핀의 고유한 문화 요소와 전통적인 축제는 많은 이들의 호기심을 자아냅니다.
          </ul>
          <strong className="travel-spots">🍍 필리핀의 맛있는 음식 🍍</strong>
          <ul>
          필리핀은 다양한 맛과 풍미를 가진 음식 문화를 자랑합니다. 🍲 양식은 다양하지만, 필리핀의 특색 있는 음식 중 하나로는 '어도보'가 있습니다. 이 밖에도 신선한 해산물을 사용한 해산물 요리나 달콤한 과일을 사용한 디저트도 매력적입니다.
          </ul>
          <strong className="travel-spots">⛵ 필리핀 여행의 매력 ⛵</strong>
          <ul>
          필리핀은 다양한 자연 경관과 문화, 음식 등으로 많은 이들을 매료시키는 특별한 여행지입니다. 필리핀 여행은 아름다운 자연 풍경을 감상하고 다채로운 문화를 체험하는 것뿐만 아니라, 현지인과의 소통과 교류를 통해 더욱 특별한 경험을 만들어줄 것입니다.
          </ul>
          이상으로 필리핀 여행에 대한 간략한 소개를 마치겠습니다. 새로운 여행의 기회가 찾아오길 바라며, 즐거운 여행이 되길 기원합니다!
        </div>
      )
    },
    {
      내용: (
        <h1 style={{ fontWeight: 'bold', fontSize: '25px' }}>
          🇮🇹 이탈리아 여행 블로그 🍕
        </h1>
      ),
      추가설명: (
        <div>
          안녕하세요! 오늘은 이탈리아의 아름다움과 매력에 관해 이야기해보려고 합니다. <br />
          <strong className="intro">🏰 역사적인 도시와 건축물 🏰 </strong><br />
          이탈리아는 로마 제국의 영향을 받은 많은 역사적인 도시와 건축물을 자랑합니다. 로마의 콜로세움과 파노라마 전망대는 많은 이들의 꿈이며, 피렌체의 피렌체 대성당은 르네상스 건축물의 명작으로 손꼽힙니다.
          <br />
          <strong className="travel-spots">🍝 이탈리아의 맛있는 음식 🍝</strong>
          <ul>
          이탈리아는 전 세계적으로 유명한 다양한 음식을 자랑합니다. 피자, 파스타, 그리고 리조또는 튀김은 이탈리아 요리의 대표적인 메뉴로, 신선한 재료와 정교한 조리법으로 맛있는 요리를 즐길 수 있습니다.
          </ul>
          <strong className="travel-spots">🍷 포도밭과 와인 🍷</strong>
          <ul>
          이탈리아는 많은 포도밭과 훌륭한 와인을 생산하는 나라로 유명합니다. 토스카나 지역의 산타 마르기리타 와이너리나 시슬리 지역의 바론디니 와이너리를 방문하여 현지의 맛있는 와인을 맛보세요.
          </ul>
          <strong className="travel-spots">⛰️ 자연 경관과 풍경 ⛰️</strong>
          <ul>
          이탈리아는 아름다운 자연 경관과 풍경으로 가득한 나라입니다. 알프스 산맥에서의 하이킹이나 아말피 해안의 풍경을 감상하는 것만으로도 여행이 즐거워집니다.
          </ul>
          <strong className="travel-spots">🎭 문화와 예술 🎭</strong>
          <ul>
          탈리아는 르네상스 시대의 예술과 문화로 유명합니다. 프랑치스코 레나토의 사티르 궁전이나 시에나의 산타 치아라 대성당은 예술과 건축물의 아름다움을 보여줍니다.
          </ul>
          이탈리아는 다양한 경험과 매력으로 많은 이들을 사로잡는 특별한 나라입니다. 이렇게 이탈리아의 아름다움을 소개해보았습니다. 함께 이탈리아를 탐험해 보세요! 🌟
        </div>
      )
    }
  ]);

  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(null);
  const [입력값, 입력값변경] = useState('');

  const toggleModal = (index) => {
    if (modal && index === title) {
      setModal(false);
      setTitle(null);
    } else {
      setModal(true);
      setTitle(index);
    }
  };

  const closeModal = () => {
    setModal(false);
    setTitle(null);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4> 💜소연이의 블로그💜 </h4>
      </div>
      {글제목.map((a, i) => (
        <div className="list" key={i}>
          <h4 onClick={() => toggleModal(i)}>
            {글제목[i]}
            <span onClick={(e) => {e.stopPropagation(); let new하트 = [...하트]; new하트[i]++; 하트변경(new하트);}}> 🤍 {하트[i]} </span>
          </h4>
          <p className="date">{날짜[i]}</p>
        </div>
      ))}
      <input type="text" />
      <input type="date" />
      <input type="number" />
      <input type="checkbox" />
      <input onChange={(e) => {
        입력값변경(e.target.value);
        console.log(입력값);
      }} />
      {modal && title !== null ? <Modal title={title} 글제목={글제목} 날짜={날짜} 상세내용={상세내용} color={'#f3fd97'} onClose={closeModal} /> : null}

      <img src="/blogb/public/일출.png" alt="일출 이미지" />
    </div>
  );
}


function Modal(props) {
  const closeModal = () => {
    props.onClose();
  };

  return (
    <div className="modal" style={{ background: props.color }}>
      <button className="close-btn" onClick={closeModal}>x</button>
      <h4> {props.글제목[props.title]} </h4>
      <p className="date"> {props.날짜[props.title]} </p>
      {props.상세내용[props.title] && (
        <div>
          <p> {props.상세내용[props.title].내용} </p>
          <p> {props.상세내용[props.title].추가설명} </p>
          <p> {props.상세내용[props.title].추가설명1} </p>
        </div>
      )}
      <button> 수정 </button>
    </div>
  );
}

export default App;