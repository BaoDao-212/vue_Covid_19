<template>
  <div class="about-me">
    <div class="avatar-wrapper">
      <img :src="avatarUrl" alt="My Avatar" />
    </div>
    <p>{{ description }}</p>
    <h3>Thông tin liên hệ</h3>
    <ul>
      <li><strong>Email:</strong> {{ email }}</li>
      <li><strong>Website:</strong> {{ website }}</li>
      <li><strong>Địa chỉ:</strong> {{ address }}</li>
    </ul>
    <h3>Dự án mới nhất</h3>
    <div
      v-for="(project, index) in latestProjects"
      :key="index"
      class="project-card"
    >
      <div class="project-img-wrapper"></div>
      <h4>
        <a :href="project.link">{{ project.title }}</a>
      </h4>
      <p>{{ project.teachnology }}</p>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      title: "Giới thiệu",
      avatarUrl:
        "https://scontent.fhan19-1.fna.fbcdn.net/v/t1.6435-9/106506721_177715837073046_4629463073523948999_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2Sk2Ft1JBZ0AX8x1rmM&_nc_ht=scontent.fhan19-1.fna&oh=00_AfC5AE3AZGv922PmDzRNoG1kxFFL4tqeUYh2JXogNZbRyA&oe=644B662E",
      description:
        "Xin chào! Tôi là một lập trình viên Front-end với kinh nghiệm và kiến thức trong Vue, React,NestJs,Typescript. Tôi đam mê xây dựng các ứng dụng web đẹp và chất lượng cao với trải nghiệm người dùng tốt nhất có thể.",
      email: "nhbao2@mail.com",
      website: "https://github.com/BaoDao-212",
      address: "Hoàng Mai-Hà Nội",
      latestProjects: [
        {
          title: "Project 1",
          link: "https://github.com/BaoDao-212/vue_Covid_19",
          technololy: "Vue2 Ant-Design RestAPI JS CSS HTML",
          description:
            "Đây trang web dùng vue2 và sử dụng thêm một số thư viện như ant-design và một số thư viện hỗ trợ. Dùng các api trên RapidAPI cung cấp viết trang web xem thông tin covid-19",
        },
        {
          title: "Project 2 back-end",
          link: "https://github.com/BaoDao-212/backend_project1",
          teachnology: "NestJs PostgresQL TyperScript GraphQL ...",
          description:
            "Đây project môn học Project1 tại Soict viết về website quản lý quán cà phê đơn giản",
        },
        {
          title: "Project 2 front-end",
          link: "https://github.com/BaoDao-212/frontend-project1",
          teachnology: "ReactJs Apollo TyperScript TailwindCSS ...",
          description:
            "Đây project môn học Project1 tại Soict viết về website quản lý quán cà phê đơn giản",
        },
        {
          title: "Project 3 back-end",
          link: "https://github.com/HoangHoang1408/se-hust-backend",
          teachnology: "NestJs PostgresQL TyperScript GraphQL ...",
          description:
            "Đây project môn học Nhâp môn công nghệ phần mềm tại Soict viết về website quản lý nhân khảu trong khu dân cư",
        },
        {
          title: "Project 3 front-end",
          link: "https://github.com/HoangHoang1408/se-hust-frontend",
          teachnology: "ReactJs Apollo TyperScript TailwindCSS ...",
          description:
            "Đây project môn học Nhâp môn công nghệ phần mềm tại Soict viết về website quản lý nhân khảu trong khu dân cư",
        },
      ],
    };
  },
};
</script>

<style>
.about-me {
  margin: 20px;
  align-content: center;
  background-color: #283149;
  text-align: left;
}

.about-me h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.about-me .avatar-wrapper {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-right: 20px;
  float: left;
}

.about-me .avatar-wrapper img {
  max-width: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-me p {
  line-height: 1.6;
  margin-bottom: 20px;
}

.about-me ul {
  list-style: none;
  margin-bottom: 20px;
}

.about-me ul li {
  line-height: 1.6;
  margin-bottom: 10px;
}

.about-me ul strong {
  display: inline-block;
  width: 100px;
  font-weight: normal;
}

.about-me h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.about-me .project-card {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  margin-bottom: 20px;
}

.about-me,
.about-me.dark {
  background-color: #283149;
  color: #f8f8f8;
}

.about-me.dark {
  background-color: #333333;
  color: #ffffff;
}

.project-card {
  transition: all 0.3s ease-in-out;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
</style>
