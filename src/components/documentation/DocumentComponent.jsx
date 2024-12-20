import React from 'react';

const DocumentComponent = ({ title, component, propDocs }) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        <div>{component}</div>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default value</th>
            </tr>
          </thead>
          <tbody>
            {propDocs.map((doc, index) => {
              return (
                <tr key={index}>
                  <td>{doc.prop}</td>
                  <td>{doc.description}</td>
                  <td>{doc.type}</td>
                  <td>
                    <code>{doc.defaultValue}</code>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentComponent;
