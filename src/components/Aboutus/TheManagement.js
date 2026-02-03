import React from "react";
import "./About.css";

const TheManagement = () => {
  return (
    <div className="table-page">
      <h2 className="table-heading">Governing Body Members</h2>

      <div className="table-container">
        <table className="member-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name of the Member</th>
              <th>Designation</th>
              <th>Photo</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Dr. K. Sudhakar</td>
              <td>Chairman</td>
              <td>
                <img
                  src="/images/managent_img_1.avif"
                  alt="Dr. K. Sudhakar"
                  className="member-photo"
                />
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Sri K. Mallikarjuna Swamy</td>
              <td>Vice Chairman</td>
              <td>
                <img
                  src="/images/managent_img_1.avif"
                  alt="Sri K. Mallikarjuna Swamy"
                  className="member-photo"
                />
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Sri K. Laxmi Narayana</td>
              <td>Secretary</td>
              <td>
                <img
                  src="/images/managent_img_1.avif"
                  alt="Sri K. Laxmi Narayana"
                  className="member-photo"
                />
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>Sri P. Sriram Reddy</td>
              <td>Joint Secretary-1</td>
              <td>
                <img
                  src="/images/managent_img_1.avif"
                  alt="Sri P. Sriram Reddy"
                  className="member-photo"
                />
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>Sri P. Janarhan Reddy</td>
              <td>Joint Secretary-2</td>
              <td>
                <img
                  src="/images/managent_img_1.avif"
                  alt="Sri P. Janarhan Reddy"
                  className="member-photo"
                />
              </td>
            </tr>

            <tr>
              <td>6</td>
              <td>Sri B. Srinivas Reddy</td>
              <td>Treasurer</td>
              <td>
                <img
                  src="/images/managent_img_1.avif"
                  alt="Sri B. Srinivas Reddy"
                  className="member-photo"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TheManagement;
