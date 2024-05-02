import { EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Link } from "react-router-dom";


const MyProfile = () => {
    return (
      <div className="mt-10">
        <Card
          title="Personal Information"
          extra={
            <button className="bg-slate-700 px-2 py-2 text-white rounded-md">
              <Link to={"#"}>
                Edit <EditOutlined />
              </Link>
            </button>
          }
          style={{ width: '100%' }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold">First Name</p>
              <p>Md</p>
            </div>
            <div>
              <p className="font-bold">Last Name</p>
              <p>MASUM</p>
            </div>
            <div>
              <p className="font-bold">Email</p>
              <p>ruman12134ruman@gmail.com</p>
            </div>
            <div>
              <p className="font-bold">Phone Number</p>
              <p>01704987382</p>
            </div>
            <div>
              <p className="font-bold">Gender</p>
              <p>N/A</p>
            </div>
            <div>
              <p className="font-bold">Anniversary</p>
              <p>N/A</p>
            </div>
            <div>
              <p className="font-bold">Date of Birth</p>
              <p>2001-02-16</p>
            </div>
            <div>
              <p className="font-bold">Number of Family Members</p>
              <p>N/A</p>
            </div>
            <div>
              <p className="font-bold">Number of Kids</p>
              <p>N/A</p>
            </div>
            <div>
              <p className="font-bold">Preferred Brand</p>
              <p>N/A</p>
            </div>
            <div>
              <p className="font-bold">Preferred Apex Store</p>
              <p>N/A</p>
            </div>
          </div>
        </Card>
      </div>
    );
};

export default MyProfile;