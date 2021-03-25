import firestore from '@react-native-firebase/firestore';

function getStudentsOfParent(id) {
  return new Promise(async (resolve, reject) => {
    firestore()
      .collection('Parents')
      .doc(id)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          const parent = documentSnapshot.data();
          parent.id = documentSnapshot.id;

          // GET STUDENTS
          const getStudents = parent.students.map((studentRef) => {
            return studentRef.get().then((studentDocumentSnapshot) => {
              const student = studentDocumentSnapshot.data();
              student.id = studentDocumentSnapshot.id;
              return student;
            });
          });

          // WAITING FOR GET ALL STUDENTS
          Promise.all(getStudents).then((result) => {
            parent.students = result;
            resolve(parent);
          });
        } else {
          resolve(null);
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getTKBofClass(id, year) {
  return new Promise((resolve, reject) => {
    const classRef = firestore().collection('Classes').doc(id);

    firestore()
      .collection('TKB11-2')
      .where('class', '==', classRef)
      .where('year', '==', year)
      .where('status', '==', true)
      .get()
      .then((querySnapshot) => {
        const schedules = [];
        querySnapshot.forEach((documentSnapshot) => {
          const schedule = documentSnapshot.data();
          schedule.id = documentSnapshot.id;
          schedules.push(schedule);
        });
        resolve(schedules);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getTBGVofClass(id) {
  return new Promise((resolve, reject) => {
    const classRef = firestore().collection('Classes').doc(id);

    firestore()
      .collection('ThongBaoGV')
      .where('class', '==', classRef)
      .get()
      .then((querySnapshot) => {
        const notis = [];
        querySnapshot.forEach((documentSnapshot) => {
          const noti = documentSnapshot.data();
          noti.id = documentSnapshot.id;
          notis.push(noti);
        });
        resolve(notis);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getNXBTofClass(id) {
  return new Promise((resolve, reject) => {
    const classRef = firestore().collection('Classes').doc(id);

    firestore()
      .collection('NXBanTru')
      .where('class', '==', classRef)
      .get()
      .then((querySnapshot) => {
        const notis = [];
        querySnapshot.forEach((documentSnapshot) => {
          const noti = documentSnapshot.data();
          noti.id = documentSnapshot.id;
          notis.push(noti);
        });
        resolve(notis);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getNXHTofClass(id) {
  return new Promise((resolve, reject) => {
    const classRef = firestore().collection('Classes').doc(id);

    firestore()
      .collection('NXHocTap')
      .where('class', '==', classRef)
      .get()
      .then((querySnapshot) => {
        const notis = [];
        querySnapshot.forEach((documentSnapshot) => {
          const noti = documentSnapshot.data();
          noti.id = documentSnapshot.id;
          notis.push(noti);
        });
        resolve(notis);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getDiemofStudent(id) {
  return new Promise((resolve, reject) => {
    const studentRef = firestore().collection('Students').doc(id);

    firestore()
      .collection('DiemSo')
      .where('student', '==', studentRef)
      .get()
      .then((querySnapshot) => {
        const datas = [];
        querySnapshot.forEach((documentSnapshot) => {
          const data = documentSnapshot.data();
          data.id = documentSnapshot.id;
          datas.push(data);
        });
        resolve(datas);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getParentofStudent(id) {
  return new Promise((resolve, reject) => {
    const studentRef = firestore().collection('Students').doc(id);

    firestore()
      .collection('Parents')
      .where('student', '==', studentRef)
      .get()
      .then((querySnapshot) => {
        const datas = [];
        querySnapshot.forEach((documentSnapshot) => {
          const data = documentSnapshot.data();
          data.id = documentSnapshot.id;
          datas.push(data);
        });
        resolve(datas);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

function getMedicalofStudent(id) {
  return new Promise((resolve, reject) => {
    const studentRef = firestore().collection('Students').doc(id);

    firestore()
      .collection('SucKhoe')
      .where('student', '==', studentRef)
      .get()
      .then((querySnapshot) => {
        const datas = [];
        querySnapshot.forEach((documentSnapshot) => {
          const data = documentSnapshot.data();
          data.id = documentSnapshot.id;
          datas.push(data);
        });
        resolve(datas);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export default {
  getTKBofClass,
  getTBGVofClass,
  getNXBTofClass,
  getNXHTofClass,
  getDiemofStudent,
  getStudentsOfParent,
  getParentofStudent,
  getMedicalofStudent,
};
