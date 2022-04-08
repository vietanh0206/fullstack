import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {
        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Cách test nhanh COVID-19 tại nhà chính xác và hiệu quả
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="400px" 
                        src="https://www.youtube.com/embed/kMIOZS03774" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                             👨‍⚕️Trong video “Hướng dẫn tự lấy mẫu xét nghiệm COVID-19” tại nhà, 
                                chuyên gia y tế sẽ hướng dẫn bạn từ các bước trước khi lấy mẫu đến quy trình lấy mẫu và cách xử trí với các trường hợp âm tính, 
                                dương tính và test không hiện kết quả.
                        </p>
                        <p>👉Trong đó, quy trình lấy mẫu gồm 5 bước:</p>
                        <p> 1️⃣ Chuẩn bị lấy mẫu. </p>
                        <p> 2️⃣ Thu thập mẫu ngoáy dịch tỵ hầu.</p>
                        <p> 3️⃣ Tách chiết mẫu.</p>
                        <p> 4️⃣ Đọc kết quả.</p>
                        <p> 5️⃣ Hủy bỏ vật liệu xét nghiệm đã qua sử dụng.</p>  
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
