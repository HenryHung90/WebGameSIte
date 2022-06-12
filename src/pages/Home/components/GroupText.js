const GroupCard = ({ Group }) => {
  ////////////////////////////////
  if (Group === "01") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">Defenders</h1>
        <p className="GroupCard_GroupMember">姜昱呈、張皓鈞、吳松懋</p>
        <p className="GroupCard_GroupMember">張劭禕、侯君翰、江秉成</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "02") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">Go back</h1>
        <p className="GroupCard_GroupMember">陳子晴、簡紫晴</p>
        <p className="GroupCard_GroupMember">李佳欣、阮氏玉紅</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "03") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">快點揪出來</h1>
        <p className="GroupCard_GroupMember">方羿捷、潘靖儒、林意軒</p>
        <p className="GroupCard_GroupMember">尤秉睿、洪珮珊、黃薰儀</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "04") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">狗狗豬豬大冒險</h1>
        <p className="GroupCard_GroupMember">陳品如、洪子云</p>
        <p className="GroupCard_GroupMember">李宜璇、陳芷媛</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "05") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">黴菌軍團</h1>
        <p className="GroupCard_GroupMember">詹侑庭、趙蔆瑄</p>
        <p className="GroupCard_GroupMember">高詠涵、黃巧鈴</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "06") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">StrawFall</h1>
        <p className="GroupCard_GroupMember">林天牧、宋顥歆</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "07") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">MELTING ICE</h1>
        <p className="GroupCard_GroupMember">周庭豪、劉肇紘、陳聖勳</p>
        <p className="GroupCard_GroupMember">張翔喻、林俊廷、姜少捷</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "08") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">防疫新運動</h1>
        <p className="GroupCard_GroupMember">施芯彤、黃宣穎、張蕙蘭</p>
        <p className="GroupCard_GroupMember">鄭語婕、陳宣予</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "09") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">ANSON</h1>
        <p className="GroupCard_GroupMember">陳品坊、孫葳麟</p>
        <p className="GroupCard_GroupMember">洪子晴、吳品萱</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "10") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">咻蛋幾勒</h1>
        <p className="GroupCard_GroupMember">范芯語、林語柔</p>
        <p className="GroupCard_GroupMember">蔡宇宸、賈承恩</p>
      </div>
    );
  }
  ////////////////////////////////
  if (Group === "11") {
    return (
      <div className="GroupCard_Text" id={`GroupCard_Text_${Group}`}>
        <h4 className="GroupCard_GroupNumber">{Group}</h4>
        <h1 className="GroupCard_GroupName">霍爾斯之旅</h1>
        <p className="GroupCard_GroupMember">方國軒、李如喬、蕭鈺騰</p>
        <p className="GroupCard_GroupMember">李曉柔、高琮凱</p>
      </div>
    );
  }
  ////////////////////////////////
};
export default GroupCard;
