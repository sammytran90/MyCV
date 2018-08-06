var app = new Vue({
    el: '#app',
    data: {
        name: '<span class="text-red">Trung</span> Tran Anh',
        address: 'No. 19, Trung Yen 14th, Yen Hoa Ward, Cau Giay Dist, Hanoi, Vietnam',
        email: 'trung.trananh0907@gmail.com',
        picture: './pics/anhthe.jpg',
        phone: '(+84) 973 392 119',
        objective: 'Self-determined, hard work, fast learning, straight forward is my main characteristics. I have Web, web application development experience and now am looking for professional Web development position.',
        experience: [
            {
                company_name: 'Freelancer',
                company_period: '2017 - Present',
                position: '',
                tasks: [
                    'Full-stack Developer',
                    'http://insights.wunderpeople.com/energy-transition-lab/'
                ]
            },
            {
                company_name: 'Miyatsu Vietnam Co., Ltd',
                company_period: 'August 2016 - Present',
                position: 'Full-stack Developer',
                tasks: [
                    'React Native + Redux development Project',
                    'CMS company website (Wordpress)',
                    'Front-end Web development'
                ]
            },
            {
                company_name: 'iMarketVietnam Co., Ltd',
                company_period: '2013 - 2016',
                position: 'Marketing Executive',
                tasks: [
                    'Samsung Display construction project Supply chain administration',
                    'manage customs declaration, sourcing quotation, trucking quotation, transportation, storage, v.v...',
                    'Analyze and implementation for cost effective'
                ]
            }
        ],
        education: [
            {
                speciality: 'Marketing - Bachelor Degree',
                period: '2008 - 2013',
                university: 'Université Nice Sophia Antipolis'
            }
        ],
        interests: 'Coding, Music, Reading'
    }
});