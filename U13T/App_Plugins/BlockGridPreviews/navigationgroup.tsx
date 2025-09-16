import { UmbBlockGridContext } from '@umbraco-cms/backoffice/block-grid';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { customElement, html, css } from 'lit-element';

@customElement('navigation-group-preview')
export class NavigationGroupPreview extends UmbLitElement {
    // The block context is automatically injected
    block!: UmbBlockGridContext;

    render() {
        const data = this.block.data ?? {};
        const title = data.title ?? '';
        const link = data.link?.[0]?.url ?? '';
        const childLinks = data.childLinks ?? [];

        return html`
      <div class="nav-group-container">
        <p>
          <strong>${title}</strong>
          ${link ? html`<span>${link}</span>` : ''}
        </p>
        <ul>
          ${childLinks.map(
            (child: any) =>
                html`<li><strong>${child.name} - ${child.url}</strong></li>`
        )}
        </ul>
      </div>
    `;
    }

    static styles = css`
    .nav-group-container {
      padding: 8px;
      border: 1px dashed #ccc;
    }
    strong {
      color: #444;
    }
  `;
}
